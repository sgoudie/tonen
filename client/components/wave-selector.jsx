WaveSelector = React.createClass({
  // handleChange() {
  //   this.props.onUserInput(
  //     this.refs.range.value
  //   );
  // },
  render() {
    return (
      <div className="radio-group">
        <WaveSelectorType type="sine" label="Sine" />
        <WaveSelectorType type="triangle" label="Triangle" />
        <WaveSelectorType type="square" label="Square" />
        <WaveSelectorType type="sawtooth" label="Saw" />
      </div>
    );
  }
});
