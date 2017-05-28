import { observable, computed } from 'mobx-react';

import { loadEntries } from '../services/entriesStore';
import { initClient } from '../services/contentfulClient';

import { CONTENTFUL, CONTENT_TYPES } from '../config/constants';

class EntriesStore {
  entries = {};
  contentTypes = {};

  constructor(entries) {
    
    this.entries        = [];
    this.contentTypes   = [];

    if (entries) {
      this.setEntries(entries);
    }
  }

  async fetchEntries() {
    const space = await initClient(CONTENTFUL.SPACE_ID, CONTENTFUL.ACCESS_TOKEN, false);
    const contentfulData = await loadEntries(null, {contentTypeChanged: true});

    return new EntriesStore(contentfulData);
  }

  setEntries(contentfulData) {
    this.entries        = contentfulData.entries.value;
    this.contentTypes   = contentfulData.contentTypes.items;
  }

  getEntriesByType(type) {

    let matchedType = this.getEntryType(type);
    let entries;

    if (matchedType) {
      return this.entries.filter((entry) => {
        return entry.sys.contentType.sys.id === type;
      });
    } else {
      return {
        error: `content type doesn't exist` 
      }
    }
  }

  getEntryType(type) {
    let matchedType = this.contentTypes.find((storedType) => {
      return storedType.sys.id === type;
    });
    return matchedType;
  }

  get recipesType() {
    return this.getEntryType(CONTENT_TYPES.RECIPES);
  }

  get notesType() {
    return this.getEntryType(CONTENT_TYPES.NOTES);
  }

  get mediasType() {
    return this.getEntryType(CONTENT_TYPES.MEDIA);
  }

  get allRecipes() {
    return this.getEntriesByType(CONTENT_TYPES.RECIPES);
  }

  get allNotes() {
    return this.getEntriesByType(CONTENT_TYPES.NOTES);
  }

  get allMedia() {
    return this.getEntriesByType(CONTENT_TYPES.MEDIA);
  }
}

export default EntriesStore;