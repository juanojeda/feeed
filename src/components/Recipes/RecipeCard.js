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
      <article className="recipe-card medium-6 cell grid-y" tabIndex="0">
        <Link to={`recipes/${slug}`} className="cell">
          <header className="recipe-card__header">
            <h3 className="recipe-card__title">{title}</h3>
            <small className="recipe-card__date">published on {moment(date).format('dddd, MMMM Do YYYY')}</small>
          </header>
          <section className="recipe-card__body">
            <p>{blurb}</p>
          </section>
        </Link>
        <footer className="cell recipe-card__footer grid-x">
          <TagList tags={tags} />
          <RecipeDifficulty difficulty={difficulty} />
        </footer>
      </article>
    );
  }
}

RecipeCard.propTypes = {

};

export default RecipeCard;