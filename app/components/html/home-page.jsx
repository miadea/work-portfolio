import React from "react";

export default class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {postMount: false}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({postMount: true})
    }, 300);
  }
  render() {
    let {postMount} = this.state
    return <div className='home-page'>
      <div className={`name ${postMount ? 'active' : ''}`}>
        <span>N</span>oxx <span>E</span>mbir
      </div>
      <hr />
      <div className="menu">
        <a href='#' onClick={() => this.props.setNav('photography') }>
          Photography
        </a>
        <a href='#' onClick={() => this.props.setNav('web') }>
          Web Design
        </a>
        <a href='#' onClick={() => this.props.setNav('about') }>
          About
        </a>
      </div>
    </div>
  }
}
