import React from 'react';
import './landingpage.css';
import { Link } from 'react-router-dom';
// import {fieldPropTypes} from 'redux-form';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#80e27e'
    },
  },
});

export default function LandingPage() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="landing-page">

        {/* Info box containing explanation */}
        <div className="gamekeeper-intro">
        
          <p className="intro-content">
            Hi! Welcome to GameKeeper. I created this page to showcase one of my first
            full stack projects which utilized node.js and jQuery alongside a reimagining
            of the project in React. As I have continued my development journey, I have
            often found myself wondering how much more functional my previous projects could 
            have been if done in newer and more versatile technologies. 
          </p>

          <p className="intro-content">
            So, please enjoy GameKeeper, both 1 and 2, as well as the notes I have included
            detailing the development process for each iteration of the app. 
          </p>

        </div>

        {/* Boxes displaying the two GameKeepers */}
        <div>
          <div className="gamekeeper one">
            <h2>GameKeeper 1.0</h2>
          </div>
          <div className="gamekeeper two">
            <Link to='/g2'><h2>GameKeeper 2.0</h2></Link>
          </div>
        </div>

        {/* Footer with portfolio, github, and LinkedIn links */}

      </div>
    </MuiThemeProvider>
  );
}