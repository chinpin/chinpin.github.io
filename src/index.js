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
      <li key={m} className={"nav_li nav_"+item.text}><ReactRouterDOM.NavLink to={item.href} activeClassName="active" className="nav-link"><span>{item.text}</span></ReactRouterDOM.NavLink></li>
    ));
    return (
      <div id="nav">
      <ul className="nav_ul">
        <li className="nav_li nav_home">
          <ReactRouterDOM.NavLink to="/" activeClassName="active" className="nav-link">
            <span>home</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><title>Chinpin Chen</title>
              <path d="M13.69,27.58a9.18,9.18,0,0,0,1.34.09A5.66,5.66,0,0,0,21,21.87c0-2.46-1.58-4.45-4-4.45a7.66,7.66,0,0,0-3.4,1.14.19.19,0,0,1-.17-.09v-.91h0v-.5h0v-.21h0V15.67c0-3-1.36-4.74-4.28-4.74A4.73,4.73,0,0,0,5.29,12.8a4.8,4.8,0,0,0-.9,2.82,3.84,3.84,0,0,0,.49,1.89,5.77,5.77,0,0,0-2.72,1.54A5.34,5.34,0,0,0,.65,22.89a4.46,4.46,0,0,0,4.62,4.78,5,5,0,0,0,4.74-4c-.07-.24-.27-.27-.54-.17a3.87,3.87,0,0,1-3.59,2.72c-2,0-3.55-1.7-3.55-4.06,0-2.14,1.21-3.91,3-3.91a2.33,2.33,0,0,1,1.75.85c.2.22.34.29.41.29.27,0,.61-.41.61-.85a1,1,0,0,0-.31-.83,5.76,5.76,0,0,0-2.12-.26A3.78,3.78,0,0,1,5.2,15.5c0-.9.58-3.58,3.25-3.58,3.09,0,3.09,2.85,3.09,4.21v1.74h0V30.81c0,1.75,0,2-.92,2.12l-.51.07a.43.43,0,0,0,0,.61c.68,0,1.41-.08,2.29-.08s1.55,0,2.72.08a.43.43,0,0,0,.05-.61l-1-.12c-.87-.13-.92-.34-.92-2.07V28.26C13.35,27.75,13.47,27.63,13.69,27.58Zm0-8.32a3,3,0,0,1,2.07-.68c2.18,0,3.28,2,3.28,3.92,0,2.53-1.17,4.37-3.16,4.37a3.22,3.22,0,0,1-1.75-.53,1.56,1.56,0,0,1-.73-1.46V23.31h0V20.67A2.12,2.12,0,0,1,13.64,19.26Z"/>
              <path d="M43.22,26.8l-.65-.07c-.88-.1-.93-.37-.93-2.12V20.55a2.83,2.83,0,0,0-3.13-3.13,5.56,5.56,0,0,0-3.29,1.26c-.07-.05-.09-.24-.09-.46V16.84h0l0-1.17c0-.11,0-.21,0-.31v0l0-.38v0a6,6,0,0,0-.29-1.42l0-.07c0-.09-.07-.19-.11-.28l0,0a3.81,3.81,0,0,0-.46-.78l0,0c0-.07-.11-.13-.17-.2L33.93,12a1.62,1.62,0,0,0-.19-.18h0a3.27,3.27,0,0,0-.76-.48l-.07,0-.27-.1-.07,0a5.43,5.43,0,0,0-1.69-.24,4.73,4.73,0,0,0-3.79,1.87,4.8,4.8,0,0,0-.9,2.82,4,4,0,0,0,.48,1.89,5.82,5.82,0,0,0-2.72,1.54,5.34,5.34,0,0,0-1.51,3.84A4.46,4.46,0,0,0,27,27.67a4.94,4.94,0,0,0,4.74-4c-.07-.24-.27-.27-.53-.17a3.87,3.87,0,0,1-3.6,2.72c-2,0-3.55-1.7-3.55-4.06,0-2.14,1.22-3.91,3-3.91a2.35,2.35,0,0,1,1.75.85c.19.22.34.29.41.29.27,0,.61-.41.61-.85a1,1,0,0,0-.32-.83,5.71,5.71,0,0,0-2.11-.26A3.79,3.79,0,0,1,27,15.5c0-.9.58-3.58,3.26-3.58,3.08,0,3.08,2.85,3.08,4.21l0,.84v6.34h0v1.3c0,1.75,0,2-.92,2.12l-.61.07a.43.43,0,0,0,.05.61c.77-.05,1.5-.08,2.38-.08s1.55,0,2.28.08c.17-.08.22-.51.05-.61l-.51-.07c-.87-.12-.92-.37-.92-2.12V20.53c0-.85.07-1,.51-1.34a2.93,2.93,0,0,1,1.89-.65c1.56,0,2.31,1,2.31,2.6v3.47c0,1.75,0,2-.92,2.12l-.49.07a.43.43,0,0,0,0,.61c.66-.05,1.39-.08,2.26-.08s1.56,0,2.43.08A.43.43,0,0,0,43.22,26.8Z"/>
            </svg>
          </ReactRouterDOM.NavLink>
        </li>
        {nav}
        <li className="nav_li nav_random">
          <a href="/random.html">
            <span>random</span>
            <svg viewBox="-1 -1 46 46">
              <path>
                <animate
                  attributeName="d" dur="3000ms" repeatCount="indefinite" calcMode="spline"
                  keyTimes="
                    0;.2;
                    .33;.53;
                    .66;.86;
                    1"
                  keySplines="
                    0,0,1,1;.42,0,.58,1;
                    0,0,1,1;.42,0,.58,1;
                    0,0,1,1;.42,0,.58,1"
                  values="
                    M 0,0 C 22,0 22,0 44,0 44,22 44,22 44,44 22,44 22,44 0,44 0,22 0,22 0,0 Z;
                    M 0,0 C 22,0 22,0 44,0 44,22 44,22 44,44 22,44 22,44 0,44 0,22 0,22 0,0 Z;
                    M 22,0 C 22,0 22,0 22,0 44,44 44,44 44,44 44,44 44,44 0,44 0,44 0,44 22,0 Z;
                    M 22,0 C 22,0 22,0 22,0 44,44 44,44 44,44 44,44 44,44 0,44 0,44 0,44 22,0 Z;
                    M 0,22 C 0,11 11,0 22,0 33,0 44,11 44,22 44,33 33,44 22,44 11,44 0,33 0,22 Z;
                    M 0,22 C 0,11 11,0 22,0 33,0 44,11 44,22 44,33 33,44 22,44 11,44 0,33 0,22 Z;
                    M 0,0 C 22,0 22,0 44,0 44,22 44,22 44,44 22,44 22,44 0,44 0,22 0,22 0,0 Z;"/>
              </path>
            </svg>
          </a>
        </li>
      </ul>
      </div>
    )
  }
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render () {
    return (
      <div className="container">
        <div className="row screen-height align-items-center">
          <div className="col">
            <h1 className="intro">Chinpin Chen <br/>Interaction designer + front-end developer</h1>
            <h2>I design and code</h2>
          </div>
        </div>
      </div>
    )
  }
}
const Resume = () => (
  <div>
    <h1>Resume</h1>
  </div>
)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <div>
        <Nav/>
        <ReactRouterDOM.Switch>
          <ReactRouterDOM.Route exact path='/' component={Home}/>
          <ReactRouterDOM.Route path='/resume' component={Resume}/>
        </ReactRouterDOM.Switch>
      </div>
    )
  }
}
ReactDOM.render((
  <ReactRouterDOM.HashRouter>
    <App/>
  </ReactRouterDOM.HashRouter>
), document.getElementById('root')
);
