import React from "react";
import styled from "styled-components";
import CenterHeading from "../../components/heading/CenterHeading";
import colors from "../../theme/color/ColorTheme";
import fontSize from "../../theme/fonts/FontTheme";
import ImpactDesktop from "./Desktop/ImpactDesktop";
import ImpactMobile from "./Mobile/ImpactMobile";

const Wrapper = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: 100px auto;
  box-sizing: border-box;
  padding: 0px 20px;
`;

const Description = styled.p`
  color: ${colors.grayBase};
  font-size: ${fontSize.l};
`;

const DesktopContainer = styled.div`
  display: none;

  @media (min-width: 801px) {
    display: block;
  }
`;

const MobileContainer = styled.div`
  display: block;

  @media (min-width: 800px) {
    display: none;
  }
`;

function ImpactSection() {
  return (
    <Wrapper>
      <CenterHeading
        subheading={"Impact"}
        heading={"Real results that drive lasting impact for everyone"}
        children={
          <Description>
            We deliver tailored strategies, innovative solutions, and dedicated
            support to drive lasting growth
          </Description>
        }
      />
      <DesktopContainer>
        <ImpactDesktop />
      </DesktopContainer>
      <MobileContainer>
        <ImpactMobile />
      </MobileContainer>
    </Wrapper>
  );
}

export default ImpactSection;
