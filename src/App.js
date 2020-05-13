import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
  }

  updateValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle  update={this.updateValue}/>
          <ColorChanger allowEdit={this.state.allowEdit} update={this.updateValue}/>
          <SizeChanger allowEdit={this.state.allowEdit} update={this.updateValue}/>
          <FamilyChanger allowEdit={this.state.allowEdit} update={this.updateValue}/>
        </div>
        <div  className="textArea">
          <TextContainer allowEdit={this.state.allowEdit} styles={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
