import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import Link from 'gatsby-link';
import RecipeDifficulty from './RecipeDifficulty';

class RecipeCard extends Component {
  render() {
    const { frontmatter, id, fields } = this.props.data;
    const {
      title,
      blurb,
      date,
      difficulty,
      tags} = frontmatter;
    const { slug } = fields;

    return (
      <div className="l-flex-item--3up">
        <Link to={`recipes/${slug}`}>
          <div className="recipe-card">
            <RecipeDifficulty difficulty={difficulty} />
            <h3>{title}</h3>
            <small>published on {moment(date).format('dddd, MMMM Do YYYY')}</small>
            <p>{blurb}</p>
            <div>
              <ul>
                {
                  tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

RecipeCard.propTypes = {

};

export default RecipeCard;