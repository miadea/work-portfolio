import React from 'react';
import {render} from 'react-dom';

import HomePage from "./components/html/home-page.jsx";
import PhotoPage from "./components/html/photo-page.jsx";

import './components/css/main.less';
import "normalize-css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {nav: 'home'}
  }
  render () {
    let page;
    switch (this.state.nav) {
      case 'home':
        page = <HomePage setNav={this.setNav.bind(this)}/>
        break;
      case 'photography':
        page = <PhotoPage setNav={this.setNav.bind(this)}/>
        break;
      case 'web':
        page = <HomePage setNav={this.setNav.bind(this)}/>
        break;
      case 'about':
        page = <HomePage setNav={this.setNav.bind(this)}/>
        break;
      default: page = <HomePage setNav={this.setNav.bind(this)} />
    }
    return (
      <div id="top" className='test'>
        {page}
  		</div>
    );
  }
  setNav(nav) {
    this.setState({nav})
  }
}

render(<App/>, document.getElementById('app'));
