import React from 'react';
import ReactDOM from 'react-dom';

import {
  lightBlue500,
  lightBlue700,
  orange500
} from 'material-ui/styles/colors';
import Core from './scenes/Core';
import {firebasea-app, firebase-auth} from 'firebase';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './scenes/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Initialise Firebase
const config = {
  apiKey: "AIzaSyCrYz2d-MbN7uzXgF0d7YG7jqc-ELsI2Rw",
  authDomain: "sportomatic-d5868.firebaseapp.com",
  databaseURL: "https://sportomatic-d5868.firebaseio.com",
  storageBucket: "sportomatic-d5868.appspot.com",
  messagingSenderId: "843789645405"
};
firebase-app.initializeApp(config);

// Customise theme to Sportomatic colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    accent1Color: orange500
  }
});

// Firebase authentication
const auth = Firebase.auth();

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Login />
      </MuiThemeProvider>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Main />, app);
