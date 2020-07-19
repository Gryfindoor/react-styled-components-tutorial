import React from "react";
import styled from "styled-components";

export const Banner = ({ title, childer, color }) => {
  return(
  <div>
    <BannerWrapper color={color}>
      <h1>{title}</h1>
      {childer}
    </BannerWrapper>
  </div>
  );
};

const BannerWrapper = styled.div`
  color: ${props => props.color};
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  h1:hover {
    color: red;
  }
`;
