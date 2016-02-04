Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col-12">
            <p><a href="http://samuelgoudie.co.uk">
              <i className="fa fa-hand-peace-o"></i> { TAPi18n.__('app.attribution') }
            </a></p>
          </div>
        </div>
      </div>
    );
  },
});
