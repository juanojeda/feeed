import React, { Component } from 'react';
import NoteCard from '../molecules/noteCard';

class NotesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notes } = this.props;

    return (
      <div>
        {
          notes && notes.map((note)=> {
            return <NoteCard key={note.sys.id} note={note} />
          })
        }
      </div>
    );
  }
}

export default NotesList;