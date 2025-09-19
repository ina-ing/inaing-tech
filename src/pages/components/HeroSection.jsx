import React from "react";
import styled, { keyframes } from "styled-components";
import colors from "../../theme/color/ColorTheme";
import HeroImg from "../../assets/images/hero-image.avif";
import { MdOutlineStar } from "react-icons/md";
import fontSize from "../../theme/fonts/FontTheme";
import ArrowButton from "../../components/button/ArrowButton";
import fontFamily from "../../theme/fonts/FontFamily";
import BrandsImg from "../../assets/images/brands.png";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  padding: 12px 20px;
  padding-bottom: 0px;
`;
const HeroContainer = styled.div`
  color: ${colors.white};
  display: flex;
  padding: 16px;
  gap: 24px;
  padding-left: 32px;
  border-radius: 28px;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primaryBase};

  @media (max-width: 1080px) {
    flex-direction: column;
    padding: 24px;
  }
`;
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  width: fit-content;
  margin: auto;
  @media (max-width: 1080px) {
    margin-top: 24px;
  }
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
  span {
    margin-left: 8px;
    font-size: ${fontSize.s};
  }
`;

const Heading = styled.h1`
  font-family: ${fontFamily.secondary};
  font-size: 54px;
  padding-top: 8px;
  box-sizing: border-box;
  word-wrap: break-word;
  white-space: normal;
  @media (max-width: 1080px) {
    font-size: 42px;
  }
`;

const SubHeading = styled.h3`
  font-weight: 500;
  color: ${colors.grayTint};
  max-width: 480px;
  box-sizing: border-box;
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 8px;
  a {
    text-decoration: none;
    color: ${colors.white};
    font-size: ${fontSize.m};
    font-weight: 400;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: 580px;
  border-radius: 20px;
  object-fit: cover;
  @media (max-width: 1080px) {
    height: 420px;
    width: 100%;
  }
`;
const MarqueeWrapper = styled.div`
  width: 100%;
  max-width: clamp(600px, 50%, 1200px);
  margin: 50px auto;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;

  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
`;

const MarqueeTitle = styled.h3`
  color: black;
  justify-content: center;
  text-align: center;
  font-size: ${fontSize.m};
  font-weight: 500;
`;

const MarqueeContent = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 20s linear infinite;
  img {
    height: 40px;
    margin-right: 40px;
    object-fit: contain;
  }
`;
function HeroSection() {
  return (
    <Wrapper>
      <HeroContainer>
        <TextContent>
          <Ratings>
            {Array.from({ length: 5 }).map((_, index) => (
              <MdOutlineStar key={index} />
            ))}
            <span>Rated 4.9/5</span>
          </Ratings>
          <Heading>Expert consulting that drives real growth</Heading>
          <SubHeading>
            Elevate your business with expert insights, tailored strategies, and
            unwavering support designed
          </SubHeading>
          <CTA>
            <ArrowButton text={"Get in touch"} variant="secondary" />
            <span>
              <a href="/">What we do</a>
            </span>
          </CTA>
        </TextContent>
        <HeroImage src={HeroImg} alt="Hero" />
      </HeroContainer>
      <MarqueeWrapper>
        <MarqueeTitle>We've partnered with:</MarqueeTitle>
        <MarqueeContent>
          <img src={BrandsImg} alt="Brands" />
          <img src={BrandsImg} alt="Brands" />
          <img src={BrandsImg} alt="Brands" />
          <img src={BrandsImg} alt="Brands" />
        </MarqueeContent>
      </MarqueeWrapper>
    </Wrapper>
  );
}

export default HeroSection;
