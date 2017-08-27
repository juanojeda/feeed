import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  getInitialProps () {

  }

  render() {
    return (
      <html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;