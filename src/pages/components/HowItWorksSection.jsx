import React from "react";
import styled from "styled-components";
import CenterHeading from "../../components/heading/CenterHeading";
import ArrowButton from "../../components/button/ArrowButton";
import HowItWorksImg from "../../assets/images/how-it-works.avif";
import colors from "../../theme/color/ColorTheme";
import { HiMiniArrowRight } from "react-icons/hi2";
import fontSize from "../../theme/fonts/FontTheme";

const Wrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 60px auto;
  box-sizing: border-box;
  padding: 0px 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: 60px minmax(0, 430px);
    grid-template-rows: auto auto;
    justify-content: center;
    gap: 16px;
  }
  @media (max-width: 540px) {
    grid-template-columns: 20px minmax(0, 430px);
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 430px;
  width: 100%;
  padding-top: 70px;
  gap: 16px;
  h2 {
    font-size: 28px;
  }
  p {
    color: ${colors.grayBase};
    padding-bottom: 16px;
  }
  span {
    font-size: 16px;
    display: flex;
    align-items: flex-end;
    gap: 5px;
    cursor: pointer;
    transition: color 0.6s ease;
  }
  svg {
    height: 18px;
    width: 18px;
    transition: transform 0.6s ease;
  }
  span:hover svg {
    transform: rotate(-45deg);
  }

  @media (max-width: 960px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding: 0;
  }
  @media (max-width: 960px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding-bottom: 24px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 430px;
  border-radius: 28px;
  object-fit: cover;
  object-position: center;
  box-sizing: border-box;
  aspect-ratio: auto 1280 / 960;

  @media (max-width: 960px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

const Line = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 2px;
  background-color: rgba(23, 45, 95, 0.2);
  height: ${(props) => props.height || "365px"};

  @media (max-width: 960px) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    margin: 0 auto;
    height: ${(props) => props.height || "540px"};
  }
  @media (max-width: 540px) {
    height: ${(props) => props.height || "480px"};
  }
`;
const NumberWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 42px;
  width: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Number = styled.div`
  font-size: ${fontSize.xs};
  color: ${colors.white};
  background-color: ${colors.primaryBase};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function HowItWorksSection() {
  return (
    <Wrapper>
      <CenterHeading
        subheading={"How it works"}
        heading={"A proven process to achieve your biggest goals"}
        children={<ArrowButton text={"Get in touch"} />}
      />
      <Container>
        <Row>
          <Image src={HowItWorksImg} alt="" />
          <Line>
            <NumberWrapper style={{ top: "40px" }}>
              <Number>01</Number>
            </NumberWrapper>
          </Line>
          <InfoWrapper>
            <h2>Tailored Strategy</h2>
            <p>
              We analyze your goals and create a customized strategy designed to
              drive measurable success for your business needs and exploring
              more ideas.
            </p>
            <span>
              Discover More <HiMiniArrowRight />
            </span>
          </InfoWrapper>
        </Row>

        <Row>
          <InfoWrapper>
            <h2>Tailored Strategy</h2>
            <p>
              We analyze your goals and create a customized strategy designed to
              drive measurable success for your business needs and exploring
              more ideas.
            </p>
            <span>
              Discover More <HiMiniArrowRight />
            </span>
          </InfoWrapper>
          <Line>
            <NumberWrapper style={{ top: "40px" }}>
              <Number>02</Number>
            </NumberWrapper>
          </Line>
          <Image src={HowItWorksImg} alt="" />
        </Row>

        <Row>
          <Image src={HowItWorksImg} alt="" />
          <Line height="50px">
            <NumberWrapper style={{ top: "40px" }}>
              <Number>03</Number>
            </NumberWrapper>
          </Line>
          <InfoWrapper>
            <h2>Tailored Strategy</h2>
            <p>
              We analyze your goals and create a customized strategy designed to
              drive measurable success for your business needs and exploring
              more ideas.
            </p>
            <span>
              Discover More <HiMiniArrowRight />
            </span>
          </InfoWrapper>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default HowItWorksSection;
