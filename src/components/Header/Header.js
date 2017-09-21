import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';
import Headroom from 'react-headroom';

import { find } from 'lodash';

import routesRegex from '../../../data/routesRegex';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import './_header.scss';

class Header extends Component {

  getActiveLinkClass(path, route){
    const activeLink = find(routesRegex, (val, exp)=>{
      const regex = new RegExp(exp);
      return path.match(regex);
    });
    const activeClass = activeLink === route ? 'link--active' : '';
    
    return activeClass;
  }

  render() {

    const { path } = this.props;

    return (
      <Headroom className="cell shrink">
        <div className="header">
          <Logo />
          <Navigation
            className="navigation">
            <Link className={`link ${this.getActiveLinkClass(path, 'food')}`} to="/food">Food</Link>
            <Link className={`link ${this.getActiveLinkClass(path, 'notes')}`} to="/notes">Notes</Link>
            <Link className={`link ${this.getActiveLinkClass(path, 'contact')}`} to="/contact">Find me</Link>
          </Navigation>
        </div>
      </Headroom>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Header;