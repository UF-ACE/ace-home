import App from 'next/app'
import Head from 'next/head'
import React from 'react'

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