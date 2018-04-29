import React from 'react';
import Button from 'material-ui/Button';

export default class GameModal extends React.Component {


  render() {
    const {name, players, type} = this.props;
    return (
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    );
  }
}
