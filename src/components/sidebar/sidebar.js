import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './sidebar.css';

class sidebar extends Component {
  render() {
    return (
      <div>
        <Col xs={10} md={10} className="sidebarBox">
          <div className="authors separation">
            <h4>Autores</h4>
            <p className="sidebarParragraph">Haruki Murakami</p>
            <p className="sidebarParragraph">J.R.R. Tolkien</p>
            <p className="sidebarParragraph">Stephen King</p>
            <p className="sidebarParragraph">Anne Rice</p>
            <p className="sidebarParragraph">Ernest Hemingway</p>
          </div>
          <div className="moreCategories separation">
            <h4> Más Categorias</h4>
            <p className="sidebarParragraph">Religion</p>
            <p className="sidebarParragraph">Salud</p>
            <p className="sidebarParragraph">Humor</p>
            <p className="sidebarParragraph">Poesía</p>
            <p className="sidebarParragraph">Diccionarios</p>
          </div>
        </Col>
      </div>
    );
  }
}

export default sidebar;