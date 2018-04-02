import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import booksData from './../books/booksData';

let url = `https://www.googleapis.com/books/v1/volumes?q=`;
let name = 'literatura'

class Search extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      text: '',
      searchData: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.randomize();
  }

  randomize() {
    if (!this.state.text.length) {
      fetch(`${url}${name}`, {
        method: 'get'
      })
      .then(data => data.json())
      .then(search_data => {
        const data = booksData(search_data);
        this.setState({ searchData: data });
        this.props.onUpdateBooksData(data);
      })
        .catch(error => console.log(error))

    } else {

      fetch(`${url}${this.state.text}`, {
        method: 'get'
      })
      .then(data => data.json())
      .then(search_data => {
        console.log(search_data);
        const data = booksData(search_data);
        this.setState({ searchData: data });
        this.props.onUpdateBooksData(data);
      })
        .catch(error => console.log(error))
    }
  }

  handleSearch(event) {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text
    };
    this.setState(prevState => ({
      text: ''
    }));
    this.randomize();
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    const { searchData } = this.state;
    return(
      <div>
        <Row>
          <Col md={10}>
            <FormGroup>
              <FormControl type="text" placeholder="Search" onChange={this.handleChange} value={this.state.text} />
            </FormGroup>{''}
          </Col>
          <Col md={2}>
            <Button bsStyle="primary" onClick={this.handleSearch}>Buscar</Button>
          </Col>
        </Row>
      </div>
      )
    }
  }
        //{searchData.map(book=>{return <li>{book.title}</li>})}
export default Search;