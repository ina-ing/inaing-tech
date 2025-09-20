import React from "react";
import styled from "styled-components";
import colors from "../theme/color/ColorTheme";
import NavBar from "../components/navbar/NavBar";
import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import ServiceSection from "./components/ServiceSection";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.white};
  z-index: 99;
`;

function HomePage() {
  return (
    <Wrapper>
      <NavBar/>
      <HeroSection/>
      <WhyUsSection/>
      <ServiceSection/>
    </Wrapper>
  );
}

export default HomePage;
