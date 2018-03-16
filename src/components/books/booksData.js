import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

const booksData = (data) => (
  data.items.map(item => (
    {
      title: `${item.volumeInfo.title}`,
      autor: `${item.volumeInfo.authors}`,
      image: `${item.volumeInfo.imageLinks.thumbnail}`,
      price: item.saleInfo.saleability == 'FOR_SALE' ? `${item.saleInfo.listPrice.amount}` : 'Sin Stock',
      id: `${item.id}`
    }
  ))
)
/*class booksData extends Component {
  render() {
    return(
      <Grid>
        <Row>
          <col xs={4} md={4}>
          </col>
        </Row> 
      </Grid>
      )
    }
  }*/

export default booksData;