import { observable, computed } from 'mobx-react';
import { loadEntries } from '../services/entriesStore';

class EntriesStore {
  entries = {};
  contentTypes = {};

  constructor(entries) {
    
    this.entries        = [];
    this.contentTypes   = {};

    if (entries) {
      this.setEntries(entries);
    }
  }

  async fetchEntries() {
    const contentfulData = await loadEntries(null, {contentTypeChanged: true});

    return new EntriesStore(contentfulData);
  }

  setEntries(contentfulData) {
    this.entries        = contentfulData.entries.value;
    this.contentTypes   = contentfulData.contentTypes.items;
  }

  getEntriesByType(type) {

    // does the contentType even exist?
    let matchedTypes = this.contentTypes.find((storedType) => {
      return storedType.sys.id === type;
    });
    let entries;

    if (matchedTypes) {
      return this.entries.filter((entry) => {
        console.log(entry.sys.contentType);
        return entry.sys.contentType.sys.id === type;
      });
    } else {
      return {
        error: `content type doesn't exist` 
      }
    }

    
  }

  get allRecipes() {
    return this.getEntriesByType('recipePost');
  }

  // @computed get allNotes() {

  // }

  // @computed get allMedia() {
    
  // }
}

export default EntriesStore;