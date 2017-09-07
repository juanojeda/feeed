import React, { Component } from 'react';
import Helmet from "react-helmet";

import config from "../../data/SiteConfig";

import Link from 'gatsby-link';

class Food extends Component {
  render() {
    return (
      <div>
        <Helmet title={`Food | ${config.siteTitle}`} />
        <div>
          All recipes
          <Link to="/recipes">More recipes</Link>
        </div>
        <div>
          Instagrams
        </div>
      </div>
    );
  }
}

export default Food;