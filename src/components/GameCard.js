import React from 'react';
import './gamecard.css';
import Rating from './rating';
import GameModal from './game-modal';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

// pass props 
export default class GameCard extends React.Component {
  render() {
    const {name, type, players} = this.props;
    // console.log(this.props)
    // console.log('name', name, 'type',type,'players',players)
    return (
      <div className="game-card">
      <Card>
        <CardContent>
          <Typography variant='headline' component='h2'>{name}</Typography>
          <Typography>{players} player {type}</Typography>
        </CardContent>
        <CardActions>
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
        </CardActions>
        </Card>
      </div>
    )
  }
}
