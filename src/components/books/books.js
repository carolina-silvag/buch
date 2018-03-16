import React, { Component } from 'react';
import { Col, Grid, Row, p, h4, img } from 'react-bootstrap';
import './books.css';

class books extends Component {
  constructor() {
    super();
  }

  renderBookItem(booksData) {
    return booksData.map(book=> {
      return <Col className="cols" md={4} key={book.id}>
                <h4>{book.title}</h4>
                <img src={book.image}/>
                <p>{book.authors}</p>
                <p>{book.price}</p>
              </Col>
    })
  };


  render() {
    const { data } = this.props;
    return(
      <Row>
          {this.renderBookItem(data)}
      </Row>
      )
    }
  }

export default books;