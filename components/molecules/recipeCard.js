import React, { Component } from 'react';
import Nullable from '../atoms/nullable';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { fields, sys } = this.props.recipe;
    const hasImages = fields.images;
    const img = hasImages ? fields.images[0] : null;
    return (
      <article>
        <header>
          <h3>{ fields.title }</h3>
        </header>
        
        <Nullable test={ hasImages }>
          {
            <div>
              <img src={ img && img.fields.file.url } alt={ img && img.description } />
            </div>
          }
        </Nullable> 

        <div>{ fields.blurb }</div>

        <footer>
          <div>
            {
              fields.ingredients.map((ingObj, i) => {
                while(i < 4){
                  const { ingredient } = ingObj;
                  return <span key={ingredient}>{ingObj.ingredient}</span>
                }
              })
            }
            { fields.ingredients.length > 4 ? `...` : null }
          </div>
        </footer>
      </article>
    );
  }
}

export default RecipeCard;