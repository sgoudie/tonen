WaveSelector = React.createClass({
  render() {
    return (
      <div className="radio-group">
        <WaveSelector.Type type="sine" label="Sine" />
        <WaveSelector.Type type="triangle" label="Triangle" />
        <WaveSelector.Type type="square" label="Square" />
        <WaveSelector.Type type="sawtooth" label="Saw" />
      </div>
    );
  }
});
