import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeMethod extends Component {
  render() {
    return (
      <div className="recipe__method">
        <h3>What to do</h3>
        <div dangerouslySetInnerHTML={{ __html: this.props.method }} />
      </div>
    );
  }
}

RecipeMethod.propTypes = {

};

export default RecipeMethod;