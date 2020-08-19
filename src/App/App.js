import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';
import './App.scss';
import MyNavbar from '../Components/MyNavbar/MyNavbar';
import BoardContainer from '../Components/BoardContainer/BoardContainer';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <MyNavbar authed={authed}/>
        <h2>React Pinterest</h2>
        {authed && <BoardContainer />}

      </div>
    );
  }
}

export default App;
