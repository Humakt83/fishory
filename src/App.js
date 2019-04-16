import React, { Component } from 'react';
import { Input, Container } from 'reactstrap';

import FishViewer from './FishViewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {search: '', minimumTankSize: 0};
    this.changeSearch = this.changeSearch.bind(this);
    this.changeMinimumTankSize = this.changeMinimumTankSize.bind(this);
  }

  changeSearch(event) {
    this.setState({search: event.target.value});
  }

  changeMinimumTankSize(event) {
    this.setState({minimumTankSize: event.target.value});
  }

  render() {
    return (
      <Container fluid>
        <Input
          type="text"
          value={this.state.search}
          onChange={this.changeSearch} />
        <Input
          type="number"
          value={this.state.minimumTankSize}
          onChange={this.changeMinimumTankSize} />
        <FishViewer 
          search={this.state.search}
          minimumTankSize={this.state.minimumTankSize}/>
      </Container>
    );
  }
}

export default App;
