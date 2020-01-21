import App from 'next/app';
import Head from 'next/head';
import React from 'react';

import { config } from '@fortawesome/fontawesome-svg-core';
// Import the CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>UF ACE</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
