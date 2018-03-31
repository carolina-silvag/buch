import React, { Component } from 'react';
import { NavItem, Navbar, Nav, NavDropdown, MenuItem, Row, Col, Button } from 'react-bootstrap';
import firebase from 'firebase';
import buchlogo from './buchlogo.png';
import './navbar.css';

class navbar extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
          <Row className="show-grid ">
            <Col xs={1} md={1}>
              <img src={this.state.user.photoURL} alt={this.state.user.displayName} className="userImg" />
            </Col>
            <Col xs={4} md={4} xsOffset={1}>
            <i className=" shopping fas fa-shopping-cart fa-2x"></i>
            </Col>
            <Col xs={1} md={1} xsOffset={1}>
              <Button onClick={this.handleLogout} className="App-btn" bsStyle="link"> Salir </Button>
            </Col>
          </Row>
        </div>
      );
      //si el usuario no está logeado
    } else {
      return (
        <Button className="App-btn warning" onClick={this.handleAuth}> Login con Google </Button>
      );
    }
  }

  render() {
    return (
      <div className="navFont">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header >
            <Navbar.Brand>
              <a href="#"><img className="logo" src={buchlogo} alt="Buch" /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                {this.renderLoginButton()}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}

export default navbar;