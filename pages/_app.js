import React from "react";
import Head from "next/head";
import Link from "next/link";
import Proptypes from "prop-types";
import "antd/dist/antd.css";
import wrapper from "../store/configureStore";

const NextApp = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Next | App</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap`}
          rel="stylesheet"
        ></link>
      </Head>
      <Component />
    </>
  );
};

NextApp.proptypes = {
  Component: Proptypes.elementType.isRequired,
};

export default wrapper.withRedux(NextApp);
