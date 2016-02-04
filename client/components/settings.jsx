Settings = React.createClass({
  render() {
    return (
      <div className="settings-menu">
        <div className="settings-menu-content">
          <h2>Settings</h2>
          <button type="button" className="btn" onClick={ this.props.closeSettings }>
            Close Menu
          </button>
        </div>
      </div>
    )
  }
});
