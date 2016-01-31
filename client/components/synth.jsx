//Creates a new osc
newOsc = ( ctx, wave, frequency, tuning ) => {
  let osc = ctx.createOscillator();
  osc.frequency.value = frequency;
  osc.tuning.value = tuning;
  osc.type = wave;
  return osc;
};

Synth = React.createClass({
  getInitialState() {
    return {
      frequency: 440,
      noteLength: 5,
      tuning: 5,
      wave: 'sine',
      lfoRate: 10,
      lfoWave: 'sine',
      lfoLevel: 10
    };
  },
  //Takes control from component id
  //Flexible method for all controls
  controlChange( control, value ) {
    this.setState({
      [control]: value
    });
  },
  playNote() {
    let ctx = this.props.ctx,
        frequency = this.state.frequency,
        noteLength = this.state.noteLength,
        tuning = this.state.tuning,
        wave = this.state.wave,
        lfoRate = this.state.lfoRate,
        lfoWave = this.state.lfoWave,
        lfoLevel = this.state.lfoLevel;

    let osc1 = newOsc( ctx, wave, frequency, 0 ),
        osc2 = newOsc( ctx, wave, frequency/2 , -tuning );
        lfo = newOsc( ctx, lfoWave, lfoRate, 0 ),
        gainNode = ctx.createGain(),
        masterGain = ctx.createGain(),
        attackTime = 0.5,
        decayTime = 0.5;

    osc1.connect(masterGain);
    osc2.connect(masterGain);

    //'Range' of gain node +/-
    gainNode.gain.value = lfoLevel;
    //plugs in 'gain' output to osc frequency (LFO)
		gainNode.connect(osc1.frequency);
		gainNode.connect(osc2.frequency);
    lfo.connect(gainNode);

    masterGain.connect( ctx.destination );

    //Starts osc
    osc1.start();
    osc2.start();
    lfo.start();

    //Ramps down to stop click (waveform)
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.6, ctx.currentTime + attackTime);
    masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + attackTime + noteLength + decayTime);
    osc1.stop(ctx.currentTime + attackTime + noteLength + decayTime + 1);
    osc2.stop(ctx.currentTime + attackTime + noteLength + decayTime + 1);
    lfo.stop(ctx.currentTime + attackTime + noteLength + decayTime + 1);
  },
  render() {
    return (
      <div className="synth">
        <div className="row">
          <SynthModule label={ TAPi18n.__( 'app.synth.oscillator' ) }>
            <WaveSelector id='wave' defaultValue={ this.state.wave } onUserInput={ this.controlChange } />
            <ControlSlider id='frequency' label={ TAPi18n.__( 'app.synth.frequency' ) } type='freq' defaultValue={ this.state.frequency } onUserInput={ this.controlChange } min='50' max='1000' />
            <ControlSlider id='tuning' label={ TAPi18n.__( 'app.synth.tuning' ) } defaultValue={ this.state.tuning } onUserInput={ this.controlChange } min='0' max='30' />
          </SynthModule>
          <SynthModule label={ TAPi18n.__( 'app.synth.lfo' ) }>
            <WaveSelector id='lfoWave' defaultValue={ this.state.lfoWave } onUserInput={ this.controlChange }/>
            <ControlSlider id='lfoRate' label={ TAPi18n.__( 'app.synth.rate' ) } type='freq' defaultValue={ this.state.lfoRate } onUserInput={ this.controlChange } min='1' max='50' />
            <ControlSlider id='lfoLevel' label={ TAPi18n.__( 'app.synth.level' ) } defaultValue={ this.state.lfoLevel } onUserInput={ this.controlChange } min='0' max='100' />
          </SynthModule>
        </div>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-block" onClick={ this.playNote }>{ TAPi18n.__( 'app.synth.play' ) }</button>
          </div>
        </div>
      </div>
    );
  }
});
