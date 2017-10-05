import React from "react";

export default class PhotoPage extends React.Component {
  constructor() {
    super()
    this.state = {type: false, activeTarget: ''}
  }
  render() {
    let types = ['all']
    , images = IMAGES.filter(i => {
      if (!types.includes(i.type)) types.push(i.type)
      if (!this.state.type) return true
      return this.state.type == i.type
    })
    console.log(types);
    return <div className='photo-page'>
      <div className='types'>
        {types.map(type => <a href='#' onClick={() => this.changeType(type)} key={type}>{type}</a>)}
      </div>
      <div className='images'>
        {images.map(i => {
          let active = (i.src == this.state.activeTarget) ? 'active' : null;
          return (
            <div key={i.src} className={`wrapper ${active}`} onClick={() => this.setActive(i.src)}>
              <img src={i.src} />
            </div>
          )
        })}
      </div>
    </div>
  }
  changeType(type) {
    if (type == 'all') type = false
    this.setState({type})
  }
  setActive(activeTarget) {
    if (activeTarget == this.state.activeTarget) this.setState({activeTarget: ''})
    else this.setState({activeTarget})
  }
}

const IMAGES = [
  {type: 'type1', src: 'https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop='},
  {type: 'type2', src: 'https://images.unsplash.com/photo-1485872304698-0537e003288d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='},
  {type: 'type1', src: 'https://images.unsplash.com/photo-1485872325464-50f17b82075a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='},
  {type: 'type2', src: 'https://thumb.ibb.co/kO0fWG/lighter_small.jpg'},
  {type: 'type3', src: 'https://images.unsplash.com/photo-1470171119584-533105644520?dpr=1&auto=format&fit=crop&w=1500&h=886&q=80&cs=tinysrgb&crop='},
]
