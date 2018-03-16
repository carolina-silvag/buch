import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Hidden, Visible } from 'react-grid-system';
import arte from './img/arte.png';
import biografias from './img/biografia.png';
import cocina from './img/cocina.png';
import comic from './img/comic.png';
import historia from './img/historia.png';
import infantiles from './img/infantiles.png';
import literatura from './img/literatura.png';
import misterio from './img/misterio.png';
import negocios from './img/negocios.png';
import romance from './img/romance.png';
import scifi from './img/scifi.png';
import './categories.css'

class categories extends Component {
  render() {
    return (
      <div>
        <Grid>

          <Visible xs sm>
            <Row className="mobileCat">
              <Button bsStyle="link" className="mobileCat"> Arte</Button>
              <Button bsStyle="link" className="mobileCat"> | Comic</Button>
              <Button bsStyle="link" className="mobileCat"> | Biografias</Button>
              <Button bsStyle="link" className="mobileCat"> | Infantiles </Button>
              <Button bsStyle="link" className="mobileCat"> | Romance</Button>
              <Button bsStyle="link" className="mobileCat"> | Sci-Fi</Button>
            </Row>
          </Visible>

          <Hidden xs sm>
            <Row className="show-grid categoryBox">
              <Col xs={1} md={1}>
                <img src={arte} className="categoryIcon" alt="" />
                <p>Arte</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={biografias} className="categoryIcon" alt="" />
                <p>Biografias</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={infantiles} className="categoryIcon" alt="" />
                <p>Infantiles</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={cocina} className="categoryIcon" alt="" />
                <p>Cocina</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={comic} className="categoryIcon" alt="" />
                <p>Comic</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={literatura} className="categoryIcon" alt="" />
                <p>Literatura</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={historia} className="categoryIcon" alt="" />
                <p>Historia</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={misterio} className="categoryIcon" alt="" />
                <p>Misterio</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={negocios} className="categoryIcon" alt="" />
                <p>Negocios</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={romance} className="categoryIcon" alt="" />
                <p>Romance</p>
              </Col>
              <Col xs={1} md={1}>
                <img src={scifi} className="categoryIcon" alt="" />
                <p>Sci-Fi</p>
              </Col>

            </Row>
          </Hidden>

        </Grid >

      </div >
    );
  }
}

export default categories;