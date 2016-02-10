Header = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },
  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col-12">
            <ul className="header-actions">
              { this.props.children }
            </ul>
            <h1>tönen</h1>
            <p>{ TAPi18n.__('app.description') }</p>
            <p><a href="https://github.com/sgoudie/tonen">
              <i className="fa fa-github-alt"></i> { TAPi18n.__('app.github_link') }
            </a></p>
          </div>
        </div>
      </div>
    );
  },
});
