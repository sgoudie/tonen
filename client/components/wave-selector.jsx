WaveSelector = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    onUserInput: React.PropTypes.func,
  },
  handleChange(event) {
    this.props.onUserInput(
      this.props.id,
      event.target.value
    );
  },
  render() {
    return (
      <div className="wave-selector">
        <label htmlFor={ `${this.props.id}-sine` }>
          <input
            type="radio"
            name={ this.props.id }
            id={ `${this.props.id}-sine` }
            value="sine"
            onClick={ this.handleChange }
            defaultChecked={ this.props.defaultValue === 'sine' }
          /> { TAPi18n.__('app.synth.sine') }
        </label>
        <label htmlFor={ `${this.props.id}-sawtooth` }>
          <input
            type="radio"
            name={ this.props.id }
            id={ `${this.props.id}-sawtooth` }
            value="sawtooth"
            onClick={ this.handleChange }
            defaultChecked={ this.props.defaultValue === 'sawtooth' }
          /> { TAPi18n.__('app.synth.sawtooth') }
        </label>
        <label htmlFor={ `${this.props.id}-square` }>
          <input
            type="radio"
            name={ this.props.id }
            id={ `${this.props.id}-square` }
            value="square" onClick={ this.handleChange }
            defaultChecked={ this.props.defaultValue === 'square' }
          /> { TAPi18n.__('app.synth.square') }
        </label>
        <label htmlFor={ `${this.props.id}-triangle` }>
          <input
            type="radio"
            name={ this.props.id }
            id={ `${this.props.id}-triangle` }
            value="triangle"
            onClick={ this.handleChange }
            defaultChecked={ this.props.defaultValue === 'triangle' }
          /> { TAPi18n.__('app.synth.triangle') }
        </label>
      </div>
    );
  },
});
