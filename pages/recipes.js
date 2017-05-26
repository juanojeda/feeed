import React, { Component } from 'react';

import { each } from 'lodash';

import { initClient, getClient, resetClient } from '../services/contentfulClient';
import { getContentTypes, findContentType } from '../services/contentTypeStore';

import EntriesStore from '../stores/entriesStore';

import Layout from '../components/layout';
import ContentTypeBlurb from '../components/molecules/contentTypeBlurb';
import RecipesList from '../components/organisms/recipesList';

const CONTENTFUL = {
  SPACE_ID              : '6gudwzhnyzfa',
  ACCESS_TOKEN          : '0a0236e09641790c4a16872fe54978a3acffa547640245a6538349b7b0085af1',
  PREVIEW_ACCESS_TOKEN  : '785dc12d8b76dedce8ba5057f4d5777b17e3ffe4ec2cde2d798cf4ff2bef04c5',
  DELIVERY_ACCESS_TOKEN : null,
};

const CONTENT_TYPES = {
  RECIPES : 'recipePost',
  NOTES   : 'notePost',
  MEDIA   : 'mediaPost' 
};

class Contentful extends Component {

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
    const entries = new EntriesStore();
    const space = await initClient(CONTENTFUL.SPACE_ID, CONTENTFUL.ACCESS_TOKEN, false);
    const recipesType = await findContentType(CONTENT_TYPES.RECIPES);
    const recipes = await entries.fetchEntries().then((entries)=> {
      // console.log(entries);
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

export default Contentful;