RangeSlider = React.createClass({
  handleChange() {
    this.props.onUserInput(
      this.refs.range.value
    );
  },
  render() {
    let units;
    this.props.type === 'freq' ? units = 'hz' : units = '';
    return (
      <div className="control-slider">
        <label>{ this.props.label } - { this.props.defaultValue }{ units }</label>
        <input
          ref="range"
          type="range"
          min={ this.props.min }
          max={ this.props.max }
          defaultValue={ this.props.defaultValue }
          onChange={ this.handleChange }
        />
      </div>
    );
  }
});
