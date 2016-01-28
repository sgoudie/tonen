ChordPad = React.createClass({
  render() {
    return (
      <div className="chord-pad">
        <button>
          { this.props.label }
        </button>
      </div>
    );
  }
});
