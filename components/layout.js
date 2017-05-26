import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Navigation from './molecules/navigation';

import routes from './routes.json';

import stylesheet from './stylesheets/global.scss';

const getPageTitle = (title, routesArr) => {
  let pageTitle = routesArr.filter((route)=>{
      return route.key === title;
    })
    .reduce((initial, route)=> {
      let isHome = route.title === '';
      return isHome ? initial : `${initial} | ${route.title}` }, 'Juan Ojeda');

  return pageTitle;
};

export default ({ children, title = 'index' }) => {
  let pageTitle = getPageTitle(title, routes);
  return (
    <div>
      <Head>
        <title>{ pageTitle }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0,   width=device-width' />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <link rel="stylesheet" type="text/css"  href="//fonts.googleapis.com/css?family=Open+Sans" />
      </Head>

      <header>
        <Navigation links={routes} activeLink={title} />
      </header>
    
      { children }
    
      <footer>
      I am a footer. I am here to stay.
      </footer>
    </div>
  )
}