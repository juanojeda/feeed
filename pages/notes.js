import React, { Component } from 'react';

import { each } from 'lodash';

import EntriesStore from '../stores/entriesStore';

import Layout from '../components/layout';
import ContentTypeBlurb from '../components/molecules/contentTypeBlurb';
import NotesList from '../components/organisms/notesList';

class Notes extends Component {

  constructor (props) {
    super(props);
  }

  static async getInitialProps({
    // pathName,     // path section of URL
    // query,        // query string section of URL
    // asPath,       // the actual URL path
    // req,          // http request object (server only)
    // res,          // http response object (server only)
    // jsonPageRes,  // fetch response object (client only)
    // err           // error object for any errors that occur during rendering
  }){
    const entriesStore = new EntriesStore();
    
    let notesType;
    const notes = await entriesStore.fetchEntries().then((entries)=> {
      notesType = entries.notesType;
      return entries.allNotes;
    });

    return { notesType, notes };
  }
  
  render() {
    const { notesType, notes } = this.props;
    const {name: title, description: blurb } = notesType;

    return (
      <Layout title="notes">
        <ContentTypeBlurb title={ title } blurb={ blurb } />

        <NotesList notes={ notes } />

      </Layout>
    )
  }
}

export default Notes;