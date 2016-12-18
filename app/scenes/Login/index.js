import React from 'react';

import {lightBlue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  content: {
    padding: 40,
    margin: 'auto',
    width: 400,
    textAlign: 'center',
    top: '25%',
    position: 'relative'
  },
  button: {
    margin: 12
  },
  page: {
    backgroundColor: lightBlue500,
    height: '100vh'
  },
  form: {
    margin: 20
  }
};

export default class Login extends React.Component {
  render() {
    return (
      <div style={styles.page}>
        <Paper zDepth={2} style={styles.content}>
          <img src='./img/logo.png' /><br />
          <div style={styles.form}>
            <TextField
              floatingLabelText="Email"
            /><br />
            <TextField
              floatingLabelText="Password"
              type="password"
            /><br />
          </div>
          <RaisedButton
            label="Login"
            primary={true}
          /><br />
          <RaisedButton
            label="Signup"
            secondary={true}
            style={styles.button}
          /><br />
          <a href=''>Forgot your password?</a>
        </Paper>
      </div>
    );
  }
}
