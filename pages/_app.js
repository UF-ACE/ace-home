import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>UF ACE</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}