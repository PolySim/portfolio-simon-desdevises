import React from "react";
import { Home } from "src/styled";

export default function HomeView(): JSX.Element {
  return (
    <Home>
      <div />
      <div>
        <p style={{ animationDelay: "0s" }}>S</p>
        <p style={{ animationDelay: "0.1s" }}>I</p>
        <p style={{ animationDelay: "0.2s" }}>M</p>
        <p style={{ animationDelay: "0.3s" }}>O</p>
        <p style={{ animationDelay: "0.4s" }}>N</p>
        <br />
        <p style={{ animationDelay: "0.6s" }}>D</p>
        <p style={{ animationDelay: "0.7s" }}>E</p>
        <p style={{ animationDelay: "0.8s" }}>S</p>
        <p style={{ animationDelay: "0.9s" }}>D</p>
        <p style={{ animationDelay: "1s" }}>E</p>
        <p style={{ animationDelay: "1.2s" }}>V</p>
        <p style={{ animationDelay: "1.3s" }}>I</p>
        <p style={{ animationDelay: "1.4s" }}>S</p>
        <p style={{ animationDelay: "1.5s" }}>E</p>
        <p style={{ animationDelay: "1.6s" }}>S</p>
      </div>
      <div>
        <p>I'm a Front-End Developer based in Lille (France)</p>
      </div>
    </Home>
  );
}
