import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Header from '../components/Header/Header';

import '../pages/_base.scss';

export default class MainLayout extends React.Component {
  render() {
    const { children, location } = this.props;
    const { pathname } = location;
    return (
      <div className="grid-y grid-frame">
        <Helmet>
          <title>{`${config.siteTitle}`}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
        <Header path={pathname} />

        {/* <div className="cell auto"> */}
          {children()}
        {/* </div> */}
      </div>
    );
  }
}
