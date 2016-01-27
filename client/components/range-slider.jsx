RangeSlider = React.createClass({
  handleChange() {
    this.props.onUserInput(
      this.refs.range.value
    );
  },
  render() {
    return (
      <div>
        <label>{ this.props.label }</label>
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
