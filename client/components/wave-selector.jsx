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
        <label htmlFor={ `${this.props.id}-sine` }>
          <input type="radio" name={ this.props.id } id={ `${this.props.id}-sine` } value="sine" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'sine' } /> Sinus
        </label>
        <label htmlFor={ `${this.props.id}-sawtooth` }>
          <input type="radio" name={ this.props.id } id={ `${this.props.id}-sawtooth` } value="sawtooth" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'sawtooth' } /> Sägezahn
        </label>
        <label htmlFor={ `${this.props.id}-square` }>
          <input type="radio" name={ this.props.id } id={ `${this.props.id}-square` } value="square" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'square' } /> Quadrat
        </label>
        <label htmlFor={ `${this.props.id}-triangle` }>
          <input type="radio" name={ this.props.id } id={ `${this.props.id}-triangle` } value="triangle" onClick={ this.handleChange } defaultChecked={ this.props.defaultValue === 'triangle' } /> Triangel
        </label>
      </div>
    );
  }
});
