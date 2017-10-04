import React from 'react';
import {render} from 'react-dom';

import './components/css/main.less';
import "normalize-css";

class App extends React.Component {
  render () {
    return (
      <div id="top" className='test'>
  		</div>
    );
  }

}

render(<App/>, document.getElementById('app'));
