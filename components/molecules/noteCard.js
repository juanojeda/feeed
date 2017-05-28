import React, { Component } from 'react';
import nullable from '../atoms/nullable';

class NoteCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { fields, sys } = this.props.note;
    return (
      <article>
        <header>
          <h3>{ fields.title }</h3>
        </header>

        <div>{ fields.content }</div>

        <footer>
          <div>
          </div>
        </footer>
      </article>
    );
  }
}

export default NoteCard;