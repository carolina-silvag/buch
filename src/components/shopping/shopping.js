import React, { Component } from 'react';

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = { favorited: this.props.isFavorite };
  }

  render() {
    return (
      <h1>hola</h1>
    );
  }
}

export default Shopping;