SynthModule = React.createClass({
  render() {
    return (
      <div className="col-6">
        <div className="synth-module">
          <h4 className="synth-module-label">{ this.props.label }</h4>
          {this.props.children}
        </div>
      </div>
    );
  },
});
