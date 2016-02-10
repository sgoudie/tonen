LanguageSwitcher = React.createClass({
  changeLanguage(event) {
    const lang = event.target.dataset.language;
    TAPi18n.setLanguage(lang);
  },
  render() {
    return (
      <li>
        <span onClick={ this.changeLanguage } data-language="de">DE</span>
        <span onClick={ this.changeLanguage } data-language="en">EN</span>
      </li>
    );
  },
});
