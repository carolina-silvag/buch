import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount () {
  
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message} `));
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  
  renderLoginButton() {
    //Si el usuario está logeado
    if (this.state.user) {
      return (
        <div>
          <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p className="App-intro">¡Hola, { this.state.user.displayName }!</p>
          <button onClick={this.handleLogout} className="App-btn"> Salir </button>
        </div>
      );
      //si el usuario no está logeado
    } else {
      return (
      <button onClick={this.handleAuth}> Login con Google </button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Buch</h2>
        </div>
        <p className="App-intro">
          {this.renderLoginButton()}
        </p>
      </div>
    );
  }
}



export default App;