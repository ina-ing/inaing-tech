import React from "react";
import styled from "styled-components";
import CenterHeading from "../../components/heading/CenterHeading";
import { BsChat } from "react-icons/bs";
import colors from "../../theme/color/ColorTheme";
import fontSize from "../../theme/fonts/FontTheme";

const Wrapper = styled.div`
  max-width: 1050px;
  width: 100%;
  margin: 80px auto;
  box-sizing: border-box;
  padding: 0px 20px;
`;

const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: auto;
  margin-top: 40px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    width: 280px;
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: start;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: fit-content;
  margin-bottom: 8px;
  svg {
    height: 22px;
    width: 22px;
    color: ${colors.white};
    padding: 14px;
    border-radius: 16px;
    background-color: ${colors.primaryBase};
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 24px 0px,
      rgba(255, 255, 255, 0.28) 0px 0px 4px 1px inset;
  }
`;

const FeatureTitle = styled.div`
  font-size: 22px;
  font-weight: 500;

  @media (max-width: 1080px) {
    font-size: ${fontSize.l};
  }
`;

const FeatureSubtitle = styled.div`
  font-size: ${fontSize.m};
  font-weight: 500;
  color: ${colors.grayBase};

  @media (max-width: 1080px) {
    font-size: ${fontSize.s};
  }
`;

function FeatureSection() {
  const features = [
    {
      title: "Unlimited consultations",
      subtitle: "Schedule as many strategy sessions as needed to your business",
      icon: <BsChat />,
    },
    {
      title: "24/7 Support",
      subtitle: "Always available when your business needs assistance",
      icon: <BsChat />,
    },
    {
      title: "Expert Advisors",
      subtitle: "Get guidance from industry-leading professionals",
      icon: <BsChat />,
    },
    {
      title: "Scalable Solutions",
      subtitle: "Grow your business with flexible strategies",
      icon: <BsChat />,
    },
    {
      title: "Tailored Strategies",
      subtitle: "Every solution is customized to fit your goals",
      icon: <BsChat />,
    },
    {
      title: "Proven Results",
      subtitle: "Track measurable improvements with our methods",
      icon: <BsChat />,
    },
  ];

  return (
    <Wrapper>
      <CenterHeading
        subheading={"Features"}
        heading={"Key benefits that set us apart from other firms"}
      />
      <FeatureWrapper>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureSubtitle>{feature.subtitle}</FeatureSubtitle>
          </FeatureCard>
        ))}
      </FeatureWrapper>
    </Wrapper>
  );
}

export default FeatureSection;
