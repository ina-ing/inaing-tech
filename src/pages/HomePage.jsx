import React from "react";
import styled from "styled-components";
import colors from "../theme/color/ColorTheme";
import NavBar from "../components/navbar/NavBar";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  background-color: ${colors.white};
  z-index: 99;
`;

function HomePage() {
  return (
    <Wrapper>
      <NavBar/>
    </Wrapper>
  );
}

export default HomePage;
