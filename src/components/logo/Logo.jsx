import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/logo.png";

const Wrapper = styled.div``;

const LogoImage = styled.img`
  height: ${(props) => props.height || 40}px;
`;

function Logo({ height, onClick }) {
  return (
    <Wrapper onClick={() => onClick && onClick()}>
      <LogoImage src={LogoImg} alt="inaing Logo" height={height} />
    </Wrapper>
  );
}

export default Logo;
