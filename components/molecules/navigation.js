import React from 'react';
import Link from 'next/link';

import styles from '../stylesheets/_navigation.scss';

/**
* Navigation component that takes a json config and renders navigation links.
* Optional active property defines which link is active.
* 
* @class Navigation
* @extends {React.Component}
*/

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    /**
     * links is an array of links
     * eg: [
     *    {
     *      label: 'label name'   //  string,
     *      link: '/path/to/link' //  string
     *    }
     */
    let { links, activeLink } = this.props;
    let classes   = 'navigation__item';

    return (
      <nav className={styles.navigation__wrapper}>
        <ul>
          { links.map((link) => {
            let isActive = activeLink === link.key;
            return (
              <li key={link.path} className={`${classes} ${isActive ? 'navigation__item--active':''}`}><Link href={link.path}><a>{link.label}</a></Link></li>
            )
          }) }
        </ul>
      </nav>
    )
  }
}

export default Navigation;