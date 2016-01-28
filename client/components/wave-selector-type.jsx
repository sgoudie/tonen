WaveSelectorType = React.createClass({
  handleChange( event ){

  },
  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio" name="waveTypes" id={ this.props.type } value={ this.props.type } click={ this.handleChange } />
          { this.props.label }
        </label>
      </div>
    );
  }
});
