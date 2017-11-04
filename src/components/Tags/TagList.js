import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_tag-list.scss';

class TagList extends Component {
  render() {
    const { tags } = this.props;
    return (
      <ul className="tag-list cell auto">
        {
          tags.map((tag) => (
            <li className="tag-list__tag" key={tag}>{tag}</li>
          ))
        }
      </ul>
    );
  }
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagList;