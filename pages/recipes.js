import React, { Component } from 'react';

import { each } from 'lodash';

import EntriesStore from '../stores/entriesStore';

import Layout from '../components/layout';
import ContentTypeBlurb from '../components/molecules/contentTypeBlurb';
import RecipesList from '../components/organisms/recipesList';

class Recipes extends Component {

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
    
    let recipesType;
    const recipes = await entriesStore.fetchEntries().then((entries)=> {
      recipesType = entries.recipesType;
      return entries.allRecipes;
    });

    return { recipesType, recipes };
  }
  
  render() {
    const { recipesType, recipes } = this.props;
    const {name: title, description: blurb } = recipesType;

    return (
      <Layout title="recipes">
        <ContentTypeBlurb title={ title } blurb={ blurb } />

        <RecipesList recipes={ recipes } />

      </Layout>
    )
  }
}

export default Recipes;