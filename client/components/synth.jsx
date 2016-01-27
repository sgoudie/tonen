Synth = React.createClass({
  getInitialState() {
    return {
      frequency: 440,
      gain: 0.5
    };
  },
  handleUserInput(frequency) {
    this.setState({
      frequency: frequency
    });
  },
  playNote(frequency, ctx) {
    let source = ctx.createOscillator();
    source.frequency.value = frequency;
    source.connect(ctx.destination);
    source.start(0);
    source.stop(ctx.currentTime + 1);
  },
  componentWillMount() {
    //Creates the audio context
    this.masterGain = this.props.ctx.createGain();
    this.masterGain.gain.value = this.state.gain;
    this.masterGain.connect(this.props.ctx.destination);
  },
  render() {
    let self = this;
    return (
      <div className="synth">
        <h2>{this.state.frequency}hz</h2>
        <RangeSlider defaultValue={ this.state.frequency } onUserInput={ this.handleUserInput } />
        { this.playNote(this.state.frequency, self.props.ctx) }
      </div>
    );
  }
});
