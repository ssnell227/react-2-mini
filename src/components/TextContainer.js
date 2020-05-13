import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  updateText = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div className="textContainer">
        <textarea
          style={{
            fontFamily: this.props.styles.fontFamily,
             fontSize: this.props.styles.fontSize,
             color: this.props.styles.fontColor,
            }}
          onChange={this.props.allowEdit === 'true' && this.updateText}
          value={this.state.text}
          placeholder="Start typing your thoughts here!"
          cols="90"
          rows="30"
        />
      </div>
    );
  }
}
