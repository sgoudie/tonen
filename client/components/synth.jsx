//Creates a new osc
newOsc = ( ctx, wave, frequency, detune ) => {
  let osc = ctx.createOscillator();
  osc.frequency.value = frequency;
  osc.detune.value = detune;
  osc.type = wave;
  return osc;
};

Synth = React.createClass({
  getInitialState() {
    return {
      frequency: 440,
      noteLength: 5,
      detune: 5,
      wave: 'sine',
      lfoRate: 20,
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
        detune = this.state.detune,
        wave = this.state.wave,
        lfoRate = this.state.lfoRate,
        lfoWave = this.state.lfoWave,
        lfoLevel = this.state.lfoLevel;

    let osc1 = newOsc( ctx, wave, frequency, 0 ),
        osc2 = newOsc( ctx, wave, frequency/2 , -detune );
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
          <div className="col-6">
            <div className="synth-module">
              <h4 className="synth-module-label">Oszillator</h4>
              <WaveSelector id='wave' defaultValue={ this.state.wave } onUserInput={ this.controlChange }/>
              <ControlSlider id='frequency' label='Frequenz' type='freq' defaultValue={ this.state.frequency } onUserInput={ this.controlChange } min='50' max='1000' />
              <ControlSlider id='detune' label='Stimmen' defaultValue={ this.state.detune } onUserInput={ this.controlChange } min='0' max='30' />
            </div>
          </div>
          <div className="col-6">
            <div className="synth-module">
              <h4 className="synth-module-label">LFO</h4>
              <WaveSelector id='lfoWave' defaultValue={ this.state.lfoWave } onUserInput={ this.controlChange }/>
              <ControlSlider id='lfoRate' label='Häufigkeit' type='freq' defaultValue={ this.state.lfoRate } onUserInput={ this.controlChange } min='1' max='100' />
              <ControlSlider id='lfoLevel' label='Lautstärke' defaultValue={ this.state.lfoLevel } onUserInput={ this.controlChange } min='0' max='100' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-block" onClick={ this.playNote }>Spielen</button>
          </div>
        </div>
      </div>
    );
  }
});
