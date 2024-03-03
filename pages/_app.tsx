import React from 'react';
import type { AppProps } from 'next/app';
import './_app.css';
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}