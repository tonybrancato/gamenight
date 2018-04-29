import React from 'react';
import './gamecard.css';
import Rating from './rating';
import GameModal from './game-modal';

// pass props 
export default class GameCard extends React.Component {
  render() {
    const {name, type, players} = this.props;
    // console.log(this.props)
    // console.log('name', name, 'type',type,'players',players)
    return (
      <div className="game-card">
      <div className="game-text">
        <h1 className="game-title">{name}</h1>
        <h2>{type}</h2>
        <h3>{players} players</h3>
      </div>
        <Rating 
          img1={require('../imgs/dice-six-faces-one.svg')}
          img2={require('../imgs/dice-six-faces-two.svg')}
          img3={require('../imgs/dice-six-faces-three.svg')}
          img4={require('../imgs/dice-six-faces-four.svg')}
          img5={require('../imgs/dice-six-faces-five.svg')}
          img6={require('../imgs/dice-six-faces-six.svg')}
        />
        <GameModal 
          name={name}
          type={type}
          players={players}
        />
      </div>
    )
  }
}
