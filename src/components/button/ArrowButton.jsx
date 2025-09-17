import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import colors from "../../theme/color/ColorTheme";
import { GoArrowRight } from "react-icons/go";
import fontSize from "../../theme/fonts/FontTheme";

const slideIn = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  40% {
    transform: translateX(10px);
    opacity: 0;
  }
  60% {
    transform: translateX(-10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  40% {
    transform: translateX(-10px);
    opacity: 0;
  }
  60% {
    transform: translateX(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background-color: ${colors.primaryBase};
  color: ${colors.white};
  padding: 4px 10px;
  padding-right: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 2em;
  font-size: ${fontSize.s};
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke-width: 0.6px;
    ${({ animate }) =>
      animate === "in" &&
      css`
        animation: ${slideIn} 0.5s ease-in-out;
      `}
    ${({ animate }) =>
      animate === "out" &&
      css`
        animation: ${slideOut} 0.5s ease-in-out;
      `}
  }
`;

function ArrowButton({ text }) {
  const [animate, setAnimate] = useState(null);

  return (
    <Wrapper
      onMouseEnter={() => setAnimate("in")}
      onMouseLeave={() => setAnimate("out")}
    >
      <span>{text}</span>
      <IconWrapper animate={animate}>
        <GoArrowRight color="#172D5F" size={20} />
      </IconWrapper>
    </Wrapper>
  );
}

export default ArrowButton;
