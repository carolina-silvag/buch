import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import modalData from './modalData';

let url = `https://www.googleapis.com/books/v1/volumes?q=`;
let name = 'literatura'

class ModalCompra extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      data: []
    };
  }

  handleShow(data) {
    console.log(data, 'en modal')
    this.setState({ show: true });
    fetch(`${data}`, {
      method: 'get'
    })
      .then(data => data.json())
      .then(modal_data => {
        console.log(modal_data, 'desde modal');
        const dataModal = modalData(modal_data);
        console.log(dataModal)
        this.setState({ data: dataModal });
        /*this.props.onUpdateBooksData(data);*/
      })
      .catch(error => console.log(error))

  }

  handleHide() {
    this.setState({ show: false });
  }


  render() {
    const { data } = this.props;
    return (
      <ButtonToolbar>
        <Button onClick={() => this.handleShow(data)}>
          COMPRAR
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.state.data.title}</h4>
            <img src={this.state.data.image}/>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae. 
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
            <Button bsStyle="primary">Agregar</Button>
            <Button bsStyle="primary">Pagar</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

/*render(<Example />);*/

/*class modal extends Component {
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
    return (
      <Modal {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}*/

export default ModalCompra;