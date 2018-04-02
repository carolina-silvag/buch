import React, { Component } from 'react';
import { NavItem, Navbar, Nav, NavDropdown, MenuItem, Row, Col, Button } from 'react-bootstrap';
import firebase from 'firebase';
import buchlogo from './buchlogo.png';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './navbar.css';

class navbar extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleShopping = this.handleShopping.bind(this);
  }

  handleShopping(open) {
    console.log('he mandado el', open)
    this.props.onUpdateShoppingData(open);
  }

  componentWillMount() {

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

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton() {
    //Si el usuario está logeado
    if (this.state.user) {
      return (
        <div>
          <Nav pullRight>
            <NavItem eventKey={1} href="/perfil">
              {this.state.user.displayName}
              <img src={this.state.user.photoURL} alt={this.state.user.displayName} className="userImg" />
            </NavItem>
            <NavItem eventKey={2} href="/shopping">
              <i className="shopping fas fa-shopping-cart fa-2x"></i>
            </NavItem>
            <NavItem eventKey={3} href="/heart">
              <i type="button" className="heart fas fa-heart fa-2x"></i>
            </NavItem>
            <NavItem eventKey={4} href="/">
              <Button onClick={this.handleLogout} className="App-btn" bsStyle="link"> Salir </Button>
            </NavItem>

          </Nav>
          
        </div>
      );
      //si el usuario no está logeado
    } else {
      return (
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <Button className="App-btn warning" onClick={this.handleAuth}> Login con Google </Button>
          </NavItem>
        </Nav>
      );
    }
  }

  render() {
    return (
      <div className="navFont">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header >
            <Navbar.Brand><Link to="/home">
              <img className="logo" src={buchlogo} alt="Buch" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {this.renderLoginButton()}          
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}

export default navbar;