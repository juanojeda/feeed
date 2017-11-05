import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import Link from 'gatsby-link';
import RecipeDifficulty from './RecipeDifficulty';
import TagList from '../Tags/TagList';

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
      <Link to={`recipes/${slug}`} className="recipe-card medium-6 cell grid-y" tabIndex="0">
        <div className="recipe-card__details cell">
          <div className="recipe-card__header">
            <h3 className="recipe-card__title">{title}</h3>
            <small className="recipe-card__date">published on {moment(date).format('dddd, MMMM Do YYYY')}</small>
          </div>
          <div className="recipe-card__body">
            <p>{blurb}</p>
          </div>
        </div>
        <div className="cell recipe-card__footer grid-x">
          <TagList tags={tags} />
          <RecipeDifficulty difficulty={difficulty} />
        </div>
      </Link>
    );
  }
}

RecipeCard.propTypes = {

};

export default RecipeCard;