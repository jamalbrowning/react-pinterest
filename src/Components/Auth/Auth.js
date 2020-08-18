import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={authed ? this.logoutClickEvent : this.loginClickEvent}>{authed ? 'Log Out' : 'Google Log In'}</button>
      </div>
    );
  }
}

export default Auth;
