ControlSlider = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    id: React.PropTypes.string,
    defaultValue: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    onUserInput: React.PropTypes.func,
  },
  handleChange() {
    this.props.onUserInput(
      this.refs.range.id,
      this.refs.range.value
    );
  },
  render() {
    let units;
    if (this.props.type === 'freq') units = 'hz';
    return (
      <div className="control-slider">
        <label>{ this.props.label } - { this.props.defaultValue }{ units }</label>
        <input
          id={ this.props.id }
          ref="range"
          type="range"
          min={ this.props.min }
          max={ this.props.max }
          defaultValue={ this.props.defaultValue }
          onChange={ this.handleChange }
        />
      </div>
    );
  },
});
