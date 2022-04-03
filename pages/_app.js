import React from 'react';
import '../styles/globals.css';
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Resume | Zihadul Islam</title>
        <meta content="Zihadul Islam" name="description" />
        <meta content="" name="keywords" />
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp