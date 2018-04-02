import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Body from './components/body/body';
import Shopping from './components/shopping/shopping';
import Heart from './components/heart/heart';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar onUpdateShoppingData = {this.handleShoppingData}/>
        <Grid>
          <Row className="show-grid SectionBody">
            <Col xs={12} md={12}>
                <Route path={"/home"} component={Body}></Route>
                <Route path={"/Shopping"} component={Shopping}></Route>
                <Route path={"/Heart"} component={Heart}></Route>
            </Col>
          </Row>
        </Grid>
      </div>   
      </Router>
    );

  }
}

export default App;