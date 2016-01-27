createOsc = ( ctx, type, noteLength, frequency, detune ) => {
  let osc = ctx.createOscillator();
  osc.frequency.value = frequency;
  osc.detune.value = detune;
  osc.type = type;
  osc.connect( ctx.destination );
  osc.start( 0 );
  osc.stop( ctx.currentTime + noteLength );
};


Synth = React.createClass({
  getInitialState() {
    return {
      frequency: 440,
      noteLength: 1,
      detune: 50
    };
  },
  frequencyChange( frequency ) {
    this.setState({
      frequency: frequency
    });
  },
  detuneChange( detune ) {
    this.setState({
      detune: detune
    });
  },
  playNote() {
    let ctx = this.props.ctx,
        frequency = this.state.frequency,
        noteLength = this.state.noteLength,
        detune = this.state.detune;
    createOsc( ctx, 'sine', noteLength, frequency, 0 );
    createOsc( ctx, 'sine', noteLength, frequency, -detune );
  },
  render() {
    return (
      <div className="synth">
        <h2>{ this.state.frequency }hz - { this.state.detune }</h2>
        <RangeSlider label='Frequency' defaultValue={ this.state.frequency } onUserInput={ this.frequencyChange } min='50' max='1000' />
        <RangeSlider label='Detune' defaultValue={ this.state.detune } onUserInput={ this.detuneChange } min='0' max='1000' />
        <button onClick={ this.playNote }>Play Note</button>
      </div>
    );
  }
});
