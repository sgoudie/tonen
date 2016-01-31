WaveSelector = React.createClass({
  handleChange( event ){
    this.props.onUserInput(
      this.props.id,
      event.target.value
    );
  },
  render() {
    return (
      <div className="wave-selector">
        <label for="sine">
          <input type="radio" name={ this.props.id } id="sine" value="sine" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'sine' } /> Sinus
        </label>
        <label for="sawtooth">
          <input type="radio" name={ this.props.id } id="sawtooth" value="sawtooth" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'sawtooth' } /> Sägezahn
        </label>
        <label for="square">
          <input type="radio" name={ this.props.id } id="square" value="square" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'square' } /> Quadrat
        </label>
        <label for="triangle">
          <input type="radio" name={ this.props.id } id="triangle" value="triangle" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'triangle' } /> Triangel
        </label>
      </div>
    );
  }
});
