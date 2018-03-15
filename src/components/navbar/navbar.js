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
          <Row className="show-grid">
            <Col xs={1} md={1}>
              <img src={this.state.user.photoURL} alt={this.state.user.displayName} className="userImg" />
            </Col>
            <Col xs={1} md={1} xsOffset={1}>
              <Button onClick={this.handleLogout} className="App-btn warning"> Salir </Button>
            </Col>
          </Row>
        </div>
      );
      //si el usuario no está logeado
    } else {
      return (
        <button className="App-btn warning" onClick={this.handleAuth}> Login con Google </button>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header >
              <img className="logo" src={buchlogo} alt="Buch"/>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={2} href="#">
                Link
      </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
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