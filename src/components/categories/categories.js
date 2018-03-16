import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
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
      text:'',
      categorieData: []
    }

    this.handleCategorie = this.handleCategorie.bind(this);
  }

  handleCategorie(categorie) {
    fetch(`${url}${categorie}`, {
        method: 'get'
      })
      .then(data => data.json())
      .then(categorie_data => {
        console.log(categorie_data, 'desde categorie');
        const data = booksData(categorie_data);
        this.setState({ categorieData: data });
        this.props.onUpdateBooksData(data);
      })
        .catch(error => console.log(error))
  }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid categoryBox">
                    <Col xs={1} md={1}>
                        <a href="#" data="arte" value="arte" onClick={() => this.handleCategorie('arte')}>
                          <img src= {arte} className="categoryIcon" alt="" />
                          <p>Arte</p>
                        </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="biografias" value="biografias" onClick={() => this.handleCategorie('biografias')}>
                        <img src= {biografias} className="categoryIcon"  alt=""/>
                        <p>Biografias</p>
                      </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="infantiles" value="infantiles" onClick={() => this.handleCategorie('infantiles')}>
                        <img src= {infantiles} className="categoryIcon"  alt=""/>
                        <p>Infantiles</p>
                      </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="cocina" value="cocina" onClick={() => this.handleCategorie('cocina')}>
                        <img src= {cocina} className="categoryIcon"  alt=""/>
                        <p>Cocina</p>
                      </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="comic" value="comic" onClick={() => this.handleCategorie('comic')}>
                        <img src= {comic} className="categoryIcon"  alt=""/>
                        <p>Comic</p>
                      </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="literatura" value="literatura" onClick={() => this.handleCategorie('literatura')}>
                        <img src= {literatura} className="categoryIcon"  alt=""/>
                        <p>Literatura</p>
                      </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="historia" value="historia" onClick={() => this.handleCategorie('historia')}>
                        <img src= {historia} className="categoryIcon"  alt=""/>
                        <p>Historia</p>
                      </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="misterio" value="misterio" onClick={() => this.handleCategorie('misterio')}>
                        <img src= {misterio} className="categoryIcon" alt="" />
                        <p>Misterio</p>
                      </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="negocios" value="negocios" onClick={() => this.handleCategorie('negocios')}>
                        <img src= {negocios} className="categoryIcon"  alt=""/>
                        <p>Negocios</p>
                      </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="romance" value="romance" onClick={() => this.handleCategorie('romance')}>
                        <img src= {romance} className="categoryIcon" alt=""/>
                        <p>Romance</p>
                      </a>
                    </Col>
                    <Col xs={1} md={1}>
                      <a href="#" data="Sci-Fi" value="Sci-Fi" onClick={() => this.handleCategorie('Sci-Fi')}>
                        <img src= {scifi} className="categoryIcon" alt=""/>
                        <p>Sci-Fi</p>
                      </a>
                    </Col>
                    </Row>
                </Grid>
                
            </div>
        );
    }
}

export default categories;

/*
Arte 
//data-categoria="arte"
*/