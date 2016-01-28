WaveSelector.Type = React.createClass({
  handleChange( event ){
    console.log(event.target.value);
  },
  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio" name="waveTypes" id={ this.props.type } value={ this.props.type } onClick={ this.handleChange } />
          { this.props.label }
        </label>
      </div>
    );
  }
});
