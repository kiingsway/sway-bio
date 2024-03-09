import React from 'react';
import './_app.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import '@/app/i18n';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head><title>Sway Bio</title></Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}