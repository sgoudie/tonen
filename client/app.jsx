const AudioContext = window.AudioContext || window.webkitAudioContext,
      ctx = new AudioContext();

App = React.createClass({
  getInitialState: function() {
    return {
      settingsOpen: false
    };
  },
  showSettings: function() {
    this.setState({ settingsOpen: true });
  },
  hideSettings: function() {
    this.setState({ settingsOpen: false });
  },
  render() {
    return (
      <div className={ "wrapper " + ( this.state.settingsOpen ? "settings-open " : "" ) }>
        <Settings ref="settingsMenu" closeSettings={ this.hideSettings } />
        <div className="content">
          <div className="overlay" onClick={ this.hideSettings }></div>
          <div className="content-inner">
            <p className="expand-settings" onClick={ this.showSettings }><i className="fa fa-cog"></i> Settings</p>
            <Header />
            <Synth ctx={ ctx } />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
});
