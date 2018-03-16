import React, { Component } from 'react';
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

let url = `https://www.googleapis.com/books/v1/volumes?q=`;

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
    fetch(`${url}${category}`, {
      method: 'get'
    })
      .then(data => data.json())
      .then(category_data => {
        console.log(category_data, 'desde category');
        const data = booksData(category_data);
        this.setState({ categoryData: data });
        this.props.onUpdateBooksData(data);
      })
      .catch(error => console.log(error))
  }

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

          <Row className="show-grid categoryBox">
            <Col xs={1} md={1}>
              <a href="#" data="arte" value="arte" onClick={() => this.handleCategory('arte')}>
                <img src={arte} className="categoryIcon" alt="" />
                <p className="categoryLink">Arte</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="biografias" value="biografias" onClick={() => this.handleCategory('biografias')}>
                <img src={biografias} className="categoryIcon" alt="" />
                <p className="categoryLink">Biografias</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="infantiles" value="infantiles" onClick={() => this.handleCategory('infantiles')}>
                <img src={infantiles} className="categoryIcon" alt="" />
                <p className="categoryLink">Infantiles</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="cocina" value="cocina" onClick={() => this.handleCategory('cocina')}>
                <img src={cocina} className="categoryIcon" alt="" />
                <p className="categoryLink">Cocina</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="comic" value="comic" onClick={() => this.handleCategory('comic')}>
                <img src={comic} className="categoryIcon" alt="" />
                <p className="categoryLink">Comic</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="literatura" value="literatura" onClick={() => this.handleCategory('literatura')}>
                <img src={literatura} className="categoryIcon" alt="" />
                <p className="categoryLink">Literatura</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="historia" value="historia" onClick={() => this.handleCategory('historia')}>
                <img src={historia} className="categoryIcon" alt="" />
                <p className="categoryLink">Historia</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="misterio" value="misterio" onClick={() => this.handleCategory('misterio')}>
                <img src={misterio} className="categoryIcon" alt="" />
                <p className="categoryLink">Misterio</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="negocios" value="negocios" onClick={() => this.handleCategory('negocios')}>
                <img src={negocios} className="categoryIcon" alt="" />
                <p className="categoryLink">Negocios</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="romance" value="romance" onClick={() => this.handleCategory('romance')}>
                <img src={romance} className="categoryIcon" alt="" />
                <p className="categoryLink">Romance</p>
              </a>
            </Col>
            <Col xs={1} md={1}>
              <a href="#" data="Sci-Fi" value="Sci-Fi" onClick={() => this.handleCategory('Sci-Fi')}>
                <img src={scifi} className="categoryIcon" alt="" />
                <p className="categoryLink">Sci-Fi</p>
              </a>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default categories;