import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import { Hidden } from 'react-grid-system';
import './sidebar.css';

class sidebar extends Component {
  render() {
    return (
      <div>
        <Hidden xs sm>
          <Col xs={10} md={10} className="sidebarBox">
            <div className="authors separation">
              <h4>Autores</h4>
              <Button bsStyle="link" className="sidebarParragraph">Haruki Murakami</Button>
              <Button bsStyle="link" className="sidebarParragraph">J.R.R. Tolkien</Button>
              <Button bsStyle="link" className="sidebarParragraph">Stephen King</Button>
              <Button bsStyle="link" className="sidebarParragraph">Anne Rice</Button>
              <Button bsStyle="link" className="sidebarParragraph">Ernest Hemingway</Button>
            </div>
            <div className="moreCategories separation">
              <h4> Más Categorias</h4>
              <Button bsStyle="link" className="sidebarParragraph">Religión</Button>
              <Button bsStyle="link" className="sidebarParragraph">Salud</Button>
              <Button bsStyle="link" className="sidebarParragraph">Poesía</Button>
              <Button bsStyle="link" className="sidebarParragraph">Diccionarios</Button>
              <Button bsStyle="link" className="sidebarParragraph">Humor</Button>
            </div>
          </Col>
        </Hidden>
      </div>
    );
  }
}

export default sidebar;