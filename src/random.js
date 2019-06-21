const navItems = [
  {
    "id":"1",
    "text":"work",
    "href":"/work"
  },{
    "id":"2",
    "text":"about",
    "href":"/about"
  },{
    "id":"3",
    "text":"resume",
    "href":"/resume"
  },{
    "id":"4",
    "text":"contact",
    "href":"/contact"
  }
];
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 1
    };
    this.readCookie = this.readCookie.bind(this);
    this.random = this.random.bind(this);
  }
  componentWillMount(){
    if(this.readCookie("theme") === null){
      this.createCookie("theme","1",7);
    } else {
     this.setState({theme: this.readCookie("theme")});
    }
  }
  createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires=" + date.toGMTString();
    }
    else expires = "";
    document.cookie = name + "=" + value+expires + "; path=/";
  }
  readCookie(name) {
    var nameEQ = name + "=";
    var cookieArray = document.cookie.split(";");
    for(var i=0;i < cookieArray.length;i++) {
      var c = cookieArray[i];
      while (c.charAt(0)==" ") c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  componentDidMount(){
    //this.random();
    //this.state.color = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
  }
  random() {
    const randomN = Math.floor(Math.random() * 3);
    switch (randomN) {
      case 0:
        document.documentElement.style.setProperty('--main-color', "#ffc0cb");
        break;
      case 1:
        document.documentElement.style.setProperty('--main-color', "#ff0000");
        break;
      case 2:
        document.documentElement.style.setProperty('--main-color', "#ffff00");
        break;
    }
    this.setState({theme: randomN.toString()});
    this.createCookie("theme",randomN.toString(),7);
  }
  render () {
    const nav = navItems.map((item, m) => (
      <li key={m} className={"nav_li nav_"+item.text}><a href={item.href} >{item.text}</a></li>
    ));
    return (
      <div>
        <ul>{nav}</ul>
      </div>
    )
  }
}
ReactDOM.render((
  <Nav/>
), document.getElementById('root')
);
