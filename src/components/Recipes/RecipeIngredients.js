import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AllHtmlEntities } from 'html-entities';

const entities = AllHtmlEntities;
const times = entities.decode('&times;');

export class Ingredient extends Component {

  formatIngredient({
    amount,
    ingredient,
    preparation,
    unit
  }) {
    const amountString = !!(unit) ? `${amount} ${times} ${unit}` : `${amount} ${times}`;
    let ingredientString = `${amountString} ${ingredient}`;

    if (!!preparation){
      ingredientString = `${ingredientString}, ${preparation}`;
    }

    return ingredientString;
  }

  render() {
    const {
      amount,
      ingredient,
      preparation,
      unit,
    } = this.props;
    return (
      <li>{this.formatIngredient({amount, ingredient, preparation, unit})}</li>
    );
  }
}

Ingredient.propTypes = {
  amount:                 PropTypes.number.isRequired,
  ingredient:             PropTypes.string.isRequired,
  preparation:            PropTypes.string,
  unit:                   PropTypes.string,
};

Ingredient.defaultProps = {
  preparation:            undefined,
  unit:                   undefined,
}

class RecipeIngredients extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className="recipe__ingredients-list">
        <h3>What you need</h3>
        <ul>
          {children}
        </ul>
      </div>
    );
  }
}

// RecipeIngredients.propTypes = {

// };

export default RecipeIngredients;