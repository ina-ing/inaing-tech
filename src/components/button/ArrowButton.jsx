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
  padding: 4px 10px;
  padding-right: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 2em;
  cursor: pointer;
  
  span{
    font-size: ${fontSize.s};
    font-weight: 500;
  }

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: ${colors.primaryBase};
    color:${colors.white};
  `}
  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: ${colors.white};
    color:${colors.primaryBase};
  `}
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: ${colors.white};
    color:${colors.white};
  `}
  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: ${colors.primaryBase};
    color:${colors.white};
  `}
  svg {
    ${(props) =>
      props.variant === "primary" &&
      `
    color:${colors.primaryBase};
  `}
    ${(props) =>
      props.variant === "secondary" &&
      `
    color:${colors.white};
  `}
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

function ArrowButton({ text, variant = "primary" }) {
  const [animate, setAnimate] = useState(null);

  return (
    <Wrapper
      variant={variant}
      onMouseEnter={() => setAnimate("in")}
      onMouseLeave={() => setAnimate("out")}
    >
      <span>{text}</span>
      <IconWrapper animate={animate} variant={variant}>
        <GoArrowRight size={20} />
      </IconWrapper>
    </Wrapper>
  );
}

export default ArrowButton;
