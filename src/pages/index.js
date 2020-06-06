import React from "react";
import "./index.css";

import { Link } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <main className="container">
    <div>
      <h1>
        Howdy, I’m Amit Sen{" "}
        <span role="img" aria-label="howdy">
          👋
        </span>
      </h1>
      <p>
        I’m a software engineer based in the Southwest{" "}
        <span role="img" aria-label="southwest">
          🏜️
        </span>{" "}
        . Currently, I work at Esri where I build software to help manage and
        understand geographic data{" "}
        <span role="img" aria-label="map">
          🗺️
        </span>{" "}
        .
      </p>
      <p>
        If you’re interested in learning more about my work or if you just want
        to connect, feel free to get in touch.
      </p>
    </div>
  </main>
);

export default IndexPage;
