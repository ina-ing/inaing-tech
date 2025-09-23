import React from "react";
import styled from "styled-components";
import { MdOutlineStar } from "react-icons/md";
import colors from "../../theme/color/ColorTheme";
import fontSize from "../../theme/fonts/FontTheme";
import fontFamily from "../../theme/fonts/FontFamily";
import ProfileImg from "../../assets/images/profile-image.avif";

const Wrapper = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: 60px auto;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 20px;
    height: 20px;
  }
  span {
    margin-left: 8px;
    font-weight: 500;
    font-size: ${fontSize.s};
  }
`;
const Quote = styled.h1`
  font-family: ${fontFamily.secondary};
  font-size: ${fontSize.xxl};
  padding-top: 8px;
  max-width: 600px;
  margin: 24px auto;
  text-align: center;
  box-sizing: border-box;
  word-wrap: break-word;
  white-space: normal;
`;
const PersonaContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 16px;
`;
const ProfileImage = styled.img`
  height: 54px;
  width: 54px;
  border-radius: 16px;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  justify-content: space-between;
  span {
    font-weight: 500;
    font-size: ${fontSize.l};
  }
`;
const ProfileTag = styled.div`
  display: flex;
  gap: 8px;
  padding: 6px 8px;
  align-items: center;
  width: fit-content;
  border-radius: 16px;
  background-color: ${colors.primaryTint};
  div{
    width: 6px;
    height: 6px;
    background-color: ${colors.primaryBase};
    border-radius: 50%;
  }
  span {
    font-weight: 500;
    color: ${colors.primaryBase};
    font-size: ${fontSize.xxs};
  }
`;

function TestimonialSection() {
  return (
    <Wrapper>
        <Ratings>
          {Array.from({ length: 5 }).map((_, index) => (
            <MdOutlineStar key={index} />
          ))}
          <span>Rated 4.9/5</span>
        </Ratings>
        <Quote>
          Inaing revolutionized our customer understanding, boosting retention
          like never before.
        </Quote>
        <PersonaContainer>
          <ProfileImage src={ProfileImg} />
          <ProfileInfo>
            <span>Muzamal Hussain</span>
            <ProfileTag>
              <span>High conversion</span>
              <div />
              <span>2x sales</span>
            </ProfileTag>
          </ProfileInfo>
        </PersonaContainer>
    </Wrapper>
  );
}

export default TestimonialSection;
