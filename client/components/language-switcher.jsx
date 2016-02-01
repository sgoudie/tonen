LanguageSwitcher = React.createClass({
  changeLanguage( event ){
    let lang = event.target.dataset.language;
    console.log(lang);
    TAPi18n.setLanguage(lang);
  },
  render(){
    return(
      <li>
        <span onClick={ this.changeLanguage } data-language="de">DE</span> | <span onClick={ this.changeLanguage } data-language="en">EN</span>
      </li>
    )
  }
});
