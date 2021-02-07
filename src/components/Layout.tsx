import React, {FC} from 'react';
import Head from "next/head";
import Navigation from "./Navigation";

const Layout:FC = ({ children }) => {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>
        {children}
      </main>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            min-height: 100%;
          }
          footer {
            text-align: center;
            margin-bottom: 20px;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
              grid-gap: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Layout
