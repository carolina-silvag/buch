import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import arte from './img/arte.png';
import biografias from './img/biografia.png';
import cocina from './img/cocina.png';
import comic from './img/comic.png';
import fotografia from './img/fotografia.png';
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
                    <Row className="show-grid">
                    <Col xs={1} md={1}>
                        <img src= {arte} className="categoryIcon" />
                        <p>Arte</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {biografias} className="categoryIcon"/>
                        <p>Biografias</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {infantiles} className="categoryIcon"/>
                        <p>Infantiles</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {cocina} className="categoryIcon"/>
                        <p>Cocina</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {comic} className="categoryIcon"/>
                        <p>Comic</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {literatura} className="categoryIcon"/>
                        <p>Literatura</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {historia} className="categoryIcon"/>
                        <p>Historia</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {misterio} className="categoryIcon"/>
                        <p>Misterio</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {negocios} className="categoryIcon"/>
                        <p>Negocios</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {romance} className="categoryIcon"/>
                        <p>Romance</p>
                    </Col>
                    <Col xs={1} md={1}>
                        <img src= {scifi} className="categoryIcon"/>
                        <p>Sci-Fi</p>
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