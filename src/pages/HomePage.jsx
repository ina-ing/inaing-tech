import React from "react";
import styled from "styled-components";
import colors from "../theme/color/ColorTheme";
import NavBar from "../components/navbar/NavBar";
import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import ServiceSection from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialSection";
import FeatureSection from "./components/FeatureSection";
import PricingSection from "./components/PricingSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ImpactSection from "./components/ImpactSection";
import TeamSection from "./components/TeamSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "../components/footer/Footer";

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
      <TestimonialSection/>
      <FeatureSection/>
      <PricingSection/>
      <HowItWorksSection/>
      <ImpactSection/>
      {/* <TeamSection/> */}
      <FaqSection/>
      <ContactSection/>
      <Footer/>
    </Wrapper>
  );
}

export default HomePage;
