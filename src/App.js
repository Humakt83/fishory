import React, { Component } from 'react';
import { Input, Container } from 'reactstrap';

import FishViewer from './FishViewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.changeSearch = this.changeSearch.bind(this);
  }

  changeSearch(event) {
    this.setState({search: event.target.value});
  }

  render() {
    return (
      <Container fluid>
        <Input
          type="text"
          value={this.state.search}
          onChange={this.changeSearch} />
        <FishViewer 
          search={this.state.search}/>
      </Container>
    );
  }
}

export default App;
