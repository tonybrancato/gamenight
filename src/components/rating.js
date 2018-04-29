import React from 'react';
import './rating.css';

export default class Rating extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      hover: false,
      wasClicked: false,
      hoverVal:0
    }
  }

  onMouseEnter = (hoverVal) => {
    this.setState({
      hoverVal: hoverVal
    })
  }
  onMouseLeave = (e) => {
    this.setState({
      hover: false
    })
  }

  // dispatch change value to update rating ON CLICK
  onClick = (hover, wasClicked) => {
    this.setState({
      hover: !hover,
      wasClicked: !wasClicked
    })
  }

  render() {
    const {img1, img2, img3, img4, img5, img6} = this.props;
    return (
      <div className='rating'>
        <img onMouseEnter={()=>this.onMouseEnter(1)} className={(this.state.hoverVal > 0) ? 'die die-select' : 'die'} 
             alt='six sided die, one face' src={img1} />
        <img onMouseEnter={()=>this.onMouseEnter(2)} className={(this.state.hoverVal > 1) ? 'die die-select' : 'die'} 
             alt='six sided die, two face' src={img2} />
        <img onMouseEnter={()=>this.onMouseEnter(3)} className={(this.state.hoverVal > 2) ? 'die die-select' : 'die'} 
             alt='six sided die, three face' src={img3} />
        <img onMouseEnter={()=>this.onMouseEnter(4)} className={(this.state.hoverVal > 3) ? 'die die-select' : 'die'} 
             alt='six sided die, four face' src={img4} />
        <img onMouseEnter={()=>this.onMouseEnter(5)} className={(this.state.hoverVal > 4) ? 'die die-select' : 'die'} 
             alt='six sided die, five face' src={img5} />
        <img onMouseEnter={()=>this.onMouseEnter(6)} className={(this.state.hoverVal > 5) ? 'die die-select' : 'die'} 
             alt='six sided die, six face' src={img6} />
      </div>
    )
  }
}