import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Hidden, Visible } from 'react-grid-system';
import booksData from './../books/booksData';
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
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      categoryData: []
    }

    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory(category) {
    this.props.onUpdateCategoryData(category); 
  }

  render() {
    const { data } = this.props
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

          <Row className="show-grid categoryBox">
            <Col xs={1} md={1}>
              <Link to={`${data}/arte`} onClick={() => this.handleCategory('arte')}>
                <img src={arte} className="categoryIcon" alt="" />
                <p className="categoryLink">Arte</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to={`${data}/biografias`} onClick={() => this.handleCategory('biografias')}>
                <img src={biografias} className="categoryIcon" alt="" />
                <p className="categoryLink">Biografias</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to="infantiles" onClick={() => this.handleCategory('infantiles')}>
                <img src={infantiles} className="categoryIcon" alt="" />
                <p className="categoryLink">Infantiles</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to="cocina"  onClick={() => this.handleCategory('cocina')}>
                <img src={cocina} className="categoryIcon" alt="" />
                <p className="categoryLink">Cocina</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to="comic" nClick={() => this.handleCategory('comic')}>
                <img src={comic} className="categoryIcon" alt="" />
                <p className="categoryLink">Comic</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to="literatura" onClick={() => this.handleCategory('literatura')}>
                <img src={literatura} className="categoryIcon" alt="" />
                <p className="categoryLink">Literatura</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to="historia" onClick={() => this.handleCategory('historia')}>
                <img src={historia} className="categoryIcon" alt="" />
                <p className="categoryLink">Historia</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to="misterio" onClick={() => this.handleCategory('misterio')}>
                <img src={misterio} className="categoryIcon" alt="" />
                <p className="categoryLink">Misterio</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to="negocios" onClick={() => this.handleCategory('negocios')}>
                <img src={negocios} className="categoryIcon" alt="" />
                <p className="categoryLink">Negocios</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to="romance" onClick={() => this.handleCategory('romance')}>
                <img src={romance} className="categoryIcon" alt="" />
                <p className="categoryLink">Romance</p>
              </Link>
            </Col>
            <Col xs={1} md={1}>
              <Link to="Sci-Fi" onClick={() => this.handleCategory('Sci-Fi')}>
                <img src={scifi} className="categoryIcon" alt="" />
                <p className="categoryLink">Sci-Fi</p>
              </Link>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default categories;