import React from "react";
import styled from "styled-components";
import CenterHeading from "../../components/heading/CenterHeading";
import colors from "../../theme/color/ColorTheme";
import fontSize from "../../theme/fonts/FontTheme";
import { IoMdCheckmark } from "react-icons/io";

const Wrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 60px auto;
  box-sizing: border-box;
  padding: 0px 20px;
`;
const Container = styled.div`
  border-radius: 38px;
  border: 1px solid #f0f0f0;
  display: flex;
  gap: 32px;
  background: linear-gradient(258deg, #d2e4fe 0%, #fff 73%, #f2f7ff 100%);

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0px;
  }
`;
const LeftCard = styled.div`
  flex: 1;
  padding: 48px 32px;
`;
const RightCard = styled.div`
  flex: 1;
  margin: 4px;
  padding: 44px 32px;
  border-radius: 34px;
  background-color: white;
`;

const Title = styled.label`
  font-weight: 500;
  display: block;
  font-size: ${fontSize.xl};
  padding-bottom: 40px;
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grayLight};

  background-color: ${({ variant }) =>
    variant === "dark" ? colors.primaryBase : colors.grayLight};

  svg {
    color: ${({ variant }) =>
      variant === "dark" ? colors.white : colors.grayShade};
  }
`;
const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FeatureItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;
const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    font-weight: 500;
    display: block;
    font-size: ${fontSize.l};
  }
  p {
    font-weight: 500;
    color: ${colors.grayBase};
    font-size: ${fontSize.s};
  }
`;
const features = [
  {
    title: "Generic Strategies",
    description:
      "One-size-fits-all solutions that lack personalized insights and flexibility.",
  },
  {
    title: "Limited Guidance",
    description:
      "Clients are left to navigate complex challenges with minimal expert support.",
  },
  {
    title: "Hidden Fees",
    description:
      "Unexpected costs and additional charges that inflate your total investment.",
  },
];
function WhyUsSection() {
  return (
    <Wrapper>
      <CenterHeading
        subheading={"Why choose us"}
        heading={"Expert consulting tailored to your business success"}
      />
      <Container>
        <LeftCard>
          <Title>Other Firms</Title>
          <FeatureWrapper>
            {features.map((feature, idx) => (
              <FeatureItem key={idx}>
                <IconWrapper variant="light">
                  <IoMdCheckmark />
                </IconWrapper>
                <FeatureContent>
                  <span>{feature.title}</span>
                  <p>{feature.description}</p>
                </FeatureContent>
              </FeatureItem>
            ))}
          </FeatureWrapper>
        </LeftCard>

        <RightCard>
          <Title>With Inaing</Title>
          <FeatureWrapper>
            {features.map((feature, idx) => (
              <FeatureItem key={idx}>
                <IconWrapper variant="dark">
                  <IoMdCheckmark />
                </IconWrapper>
                <FeatureContent>
                  <span>{feature.title}</span>
                  <p>{feature.description}</p>
                </FeatureContent>
              </FeatureItem>
            ))}
          </FeatureWrapper>
        </RightCard>
      </Container>
    </Wrapper>
  );
}

export default WhyUsSection;
