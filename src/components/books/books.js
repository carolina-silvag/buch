import React, { Component } from 'react';
import { Col, Grid, Row, p, h4, img, Button, Modal} from 'react-bootstrap';
import ModalCompra from './../modal/modal'
import './books.css';

class books extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lgShow: false
    };
  }

  renderBookItem(booksData) {
    return booksData.map(book=> {
      return <Col className="cols" md={4} key={book.id}>
                <h4>{book.title}</h4>
                <img src={book.image}/>
                <p>{book.author}</p>
                <p>{book.price}</p>
                <ModalCompra/>
            
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