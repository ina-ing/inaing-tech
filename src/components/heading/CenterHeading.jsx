import React from "react";
import styled from "styled-components";
import colors from "../../theme/color/ColorTheme";
import fontFamily from "../../theme/fonts/FontFamily";
import fontSize from "../../theme/fonts/FontTheme";

const Wrapper = styled.div`
  text-align: center;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;
const Subheading = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 500;
    font-size: ${fontSize.s};
    color: ${colors.primaryBase};
  }
`;

const Bullet = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${colors.secondaryBase};
`;

const Heading = styled.h1`
  font-family: ${fontFamily.secondary};
  font-size: ${fontSize.huge};
  padding-top: 8px;
  box-sizing: border-box;
  word-wrap: break-word;
  white-space: normal;
  @media (max-width: 740px) {
    font-size: ${fontSize.xxl};
  }
`;
function CenterHeading({ subheading, heading }) {
  return (
    <Wrapper>
      <Subheading>
        <Bullet />
        <span>{subheading}</span>
      </Subheading>
      <Heading>{heading}</Heading>
    </Wrapper>
  );
}

export default CenterHeading;
