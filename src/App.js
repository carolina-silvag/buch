import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';
import Categories from './components/categories/categories';
import Sidebar from './components/sidebar/sidebar'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Grid>
          <Row className="show-grid SectionBody">
            <Col xs={12} md={12}>
              <Row className="show-grid SectionCategories">
                <Col xs={12} md={12}>
                  <code>
                    <Categories/>
                  </code>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={3} md={3} className="SectionSidebar">
                  <code>
                    <Sidebar/>
                  </code>
                </Col>
                <Col xs={9} md={9} className="SearchBooks">
                  <Row className="show-grid Search">
                    <Col md={12} xs={12}>
                      <code>
                        <Search/>
                      </code>
                    </Col>
                  </Row>
                  <Row className="show-grid Books">
                    <Col md={12} xs={12}>
                      <code></code>
                    </Col>
                  </Row>
                </Col>
              </Row>       
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;