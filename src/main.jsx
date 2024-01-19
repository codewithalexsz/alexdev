// import React from "react";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./App.jsx";
import Hero from "./Hero.jsx";
import Skills from "./skills.jsx";
import Experience from "./experience.jsx";
import "../build/output.css";
import "./theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <Hero />
      <Skills />
      <Experience />
    </ChakraProvider>
  </React.StrictMode>
);
