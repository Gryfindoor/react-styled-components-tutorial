import React from "react";
import styled from "styled-components";

const AlternativeStyled = ({title, className}) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2 className="random">another heading</h2>
    </section>
  );
};

export default styled(AlternativeStyled)`
  background: red;
  transition: all 2s ease-in-out;
  h1 {
    color: blue;
  }
  .random {
    color: green;
  }
  &:hover {
      background: black;
    }
`;

