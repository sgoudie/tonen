Synth = React.createClass({
  getInitialState() {
    return {
      frequency: 440
    };
  },
  handleUserInput(frequency) {
    this.setState({
      frequency: frequency
    });
  },
  render() {
    return (
      <div className="synth">
        <h2>{this.state.frequency}hz</h2>
        <RangeSlider defaultValue={ this.state.frequency } onUserInput={ this.handleUserInput } />
      </div>
    );
  }
});
