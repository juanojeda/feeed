import React, { Component } from 'react';
import RecipeCard from '../molecules/recipeCard';

class RecipesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { recipes } = this.props;

    return (
      <div>
        {
          recipes.map((recipe)=> {
            return <RecipeCard key={recipe.sys.id} recipe={recipe} />
          })
        }
      </div>
    );
  }
}

export default RecipesList;