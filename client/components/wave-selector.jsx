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
        <label>
          <input type="radio" name={ this.props.id } value="sine" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'sine' } /> Sinus
        </label>
        <label>
          <input type="radio" name={ this.props.id } value="sawtooth" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'sawtooth' } /> Sägezahn
        </label>
        <label>
          <input type="radio" name={ this.props.id } value="square" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'square' } /> Quadrat
        </label>
        <label>
          <input type="radio" name={ this.props.id } value="triangle" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'triangle' } /> Triangel
        </label>
      </div>
    );
  }
});
