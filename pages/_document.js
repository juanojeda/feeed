import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    return { html, head }
  }

  render() {
    return (
      <html>
        <Head>
           <link rel='stylesheet' href='/static/css/bundle.css' /> 
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;