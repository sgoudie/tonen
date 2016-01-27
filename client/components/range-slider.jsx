RangeSlider = React.createClass({
  handleChange() {
    this.props.onUserInput(
      this.refs.range.value
    );
  },
  render() {
    return (
      <div className="control-slider">
        <label>{ this.props.label } - { this.props.defaultValue }</label>
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
