import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
}: Props): JSX.Element => (
  <div className="container mx-auto pt-10 pl-10 pr-10">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>{children}</main>
  </div>
);

export default Layout;
