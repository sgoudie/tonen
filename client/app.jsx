const AudioContext = window.AudioContext || window.webkitAudioContext,
      ctx = new AudioContext();

App = React.createClass({
  render() {
    return (
      <div className="container">
        <h1>tönen</h1>
        <Synth ctx={ ctx }/>
      </div>
    );
  }
});
