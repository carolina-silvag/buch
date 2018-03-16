import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import booksData from './../books/booksData';
import search from './../search/search';

let url = `https://www.googleapis.com/books/v1/volumes?q=`;
let name = 'literatura'

class searchBooks extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      text: '',
      searchData: null
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  render() {
    return(
      <Row className="show-grid Search">
        <Col md={12} xs={12}>
          <code>
            <FormGroup>
              <FormControl type="text" placeholder="Search" onChange={this.handleChange} value={this.state.text} />
            </FormGroup>{''}
            <Button type="submit" onClick={this.handleSearch}>Buscar</Button>
          </code>
        </Col>
      </Row>
      <Row className="show-grid Books">
        <Col md={12} xs={12}>
          <code>
            
          </code>
        </Col>
      </Row>
      )
    }
  }

export default searchBooks;