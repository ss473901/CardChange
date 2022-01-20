import React from "react";
import styled from "styled-components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Loader />
    </div>
  );
}

const Loader = styled("div")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  border: " 1px solid #aaa"
});
