import React, { Component } from 'react';

class ContentTypeBlurb extends Component {
  render() {

    const { title, blurb } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <p>{blurb}</p>
      </div>
    );
  }
}

export default ContentTypeBlurb;