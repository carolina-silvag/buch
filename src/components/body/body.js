import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Row, Col, Grid } from 'react-bootstrap';
import Search from './../search/search';
import Categories from './../categories/categories';
import Sidebar from './../sidebar/sidebar';
import Books from './../books/books';
import booksData from './../books/booksData';

let url = `https://www.googleapis.com/books/v1/volumes?q=`;

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      category : this.props.match.url
    };
    this.handleCategoryData = this.handleCategoryData.bind(this);
    this.handleBooksData = this.handleBooksData.bind(this);

  }

  handleBooksData(data) {
    this.setState({ booksData: data });
  }

  handleCategoryData(category) {
    fetch(`${url}${category}`, {
      method: 'get'
    })
      .then(data => data.json())
      .then(category_data => {
        const data = booksData(category_data);
        this.setState({ booksData: data });
      })
      .catch(error => console.log(error))
  }

  render() {
    const { booksData } = this.state;
    return (
      <Router>
      <div>
        <Row className="show-grid SectionCategories">
          <Col xs={12} md={12}>
            <div>
              <Categories onUpdateCategoryData={this.handleCategoryData} data={this.state.category}/>
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={3} md={3}>
            <div>
              <Sidebar onUpdateBooksData={this.handleBooksData}/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} className="SearchBooks SectionBook">
            <Row className="show-grid Search">
              <Col md={12} xs={12}>
                <div>
                  <Search onUpdateBooksData={this.handleBooksData}/>
                </div>
              </Col>
            </Row>
            <Row className="show-grid Books">
              <Col md={12} xs={12}>
                <div>
                  <Books data={booksData} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row> 
      </div>
      </Router>      
    );
  }
}

export default Body;