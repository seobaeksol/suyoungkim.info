import React from "react";
import App from "next/app";
import { Router } from "next/router";
import { AppContextType } from "next/dist/next-server/lib/utils";

class MyApp extends App {
  static async getInitialProps(appContext: AppContextType<Router>) {
    console.log(appContext.ctx.req?.headers.host);
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
