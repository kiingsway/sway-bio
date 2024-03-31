import React from 'react';
import './_app.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import '@/app/i18n';

const App = ({ Component, pageProps }: AppProps) => (
  <React.Fragment>
    <Head><title>Sway Bio</title></Head>
    <Analytics />
    <Component {...pageProps} />
  </React.Fragment>
);

export default App;