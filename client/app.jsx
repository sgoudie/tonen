const AudioContext = window.AudioContext || window.webkitAudioContext,
      ctx = new AudioContext();

App = React.createClass({
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Synth ctx={ ctx }/>
      </div>
    );
  }
});
