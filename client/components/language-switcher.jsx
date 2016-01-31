LanguageSwitcher = React.createClass({
  render(){
    return(
      <li>
        <span onClick={ this.changeLanguage } data-language="de">DE</span> | <span onClick={ this.changeLanguage } data-language="en">EN</span>
      </li>
    )
  }
});
