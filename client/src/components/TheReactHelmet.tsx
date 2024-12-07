import React from "react";
import { Helmet } from "react-helmet";

const TheReactHelmet = ({ title }: { title: string }) => {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content="Basic example" />
      </Helmet>
    </div>
  );
};

export default TheReactHelmet;
