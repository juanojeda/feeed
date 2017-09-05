import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_content-box.scss';

class ContentBox extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="content-box">
        {children}
      </div>
    );
  }
}

ContentBox.propTypes = {

};

export default ContentBox;