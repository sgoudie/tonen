WaveSelector = React.createClass({
  handleChange( event ){
    this.props.onUserInput(
      event.target.value
    );
  },
  render() {
    return (
      <div className="wave-selector">
        <label>
          <input type="radio" name="waveTypes" value="sine" onClick={ this.handleChange } checked={ this.props.defaultValue === 'sine' } /> Sinus
        </label>
        <label>
          <input type="radio" name="waveTypes" value="sawtooth" onClick={ this.handleChange } checked={ this.props.defaultValue === 'sawtooth' } /> Sägezahn
        </label>
        <label>
          <input type="radio" name="waveTypes" value="square" onClick={ this.handleChange } checked={ this.props.defaultValue === 'square' } /> Quadrat
        </label>
        <label>
          <input type="radio" name="waveTypes" value="triangle" onClick={ this.handleChange } checked={ this.props.defaultValue === 'triangle' } /> Triangel
        </label>
      </div>
    );
  }
});
