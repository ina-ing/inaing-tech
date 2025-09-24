import React from "react";
import styled from "styled-components";
import colors from "../../theme/color/ColorTheme";
import fontFamily from "../../theme/fonts/FontFamily";
import fontSize from "../../theme/fonts/FontTheme";

const Wrapper = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;
const Subheading = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  span {
    font-size: ${fontSize.s};
    color: ${colors.white};
  }
`;

const Bullet = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.white};
`;

const Heading = styled.h1`
  font-family: ${fontFamily.secondary};
  font-size: ${fontSize.huge};
  box-sizing: border-box;
  word-wrap: break-word;
  white-space: normal;
  color: ${colors.white};
  @media (max-width: 740px) {
    font-size: ${fontSize.xxl};
  }
`;
function SideHeading({ subheading, heading, children }) {
  return (
    <Wrapper>
      <Subheading>
        <Bullet />
        <span>{subheading}</span>
      </Subheading>
      <Heading>{heading}</Heading>
      {children}
    </Wrapper>
  );
}

export default SideHeading;
