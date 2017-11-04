import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_recipe-difficulty.scss';

class RecipeDifficulty extends Component {
  render() {
    const { difficulty } = this.props;
    const difficultyClass = `recipe-difficulty__bar recipe-difficulty--rating-${difficulty}`;
    return (
      <div className="recipe-difficulty">
        <div className="recipe-difficulty__container">
          <div className={difficultyClass}></div>
        </div>
        <div className="recipe-difficulty__rating-text">
          Difficulty: {difficulty} / 5</div>
      </div>
    );
  }
}

RecipeDifficulty.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default RecipeDifficulty;