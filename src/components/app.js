import React from 'react';
import LandingPage from './landingpage';
import { Route } from 'react-router-dom';
import GameKeeper2 from './gamekeeper-2';


export default class App extends React.Component {
  render() {
    return (
      <div className="games">
        <Route exact path="/" component={LandingPage}/>
        <Route path="/g2" component={GameKeeper2} />
      </div>
    );
  }
}