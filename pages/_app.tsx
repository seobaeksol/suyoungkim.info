import React from "react";
import App from "next/app";
import { Router } from "next/router";
import { AppContextType } from "next/dist/next-server/lib/utils";
import { GlobalContextProvider } from "../lib/context";

class MyApp extends App {
  static async getInitialProps(appContext: AppContextType<Router>) {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    );
  }
}

export default MyApp;
