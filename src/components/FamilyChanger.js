import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  render() {
    return (
      <select name='fontFamily' onChange={this.props.allowEdit === 'true' && this.props.update} className="dropDownContainer">
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    );
  }
}
