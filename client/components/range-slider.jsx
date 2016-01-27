RangeSlider = React.createClass({
  handleChange() {
    this.props.onUserInput(
      this.refs.range.value
    );
  },
  render() {
    return (
      <div>
        <input
          ref="range"
          type="range"
          min="0"
          max="2000"
          defaultValue={ this.props.defaultValue }
          onChange={ this.handleChange }
        />
      </div>
    );
  }
});
