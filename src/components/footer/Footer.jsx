import React from "react";
import styled from "styled-components";
import colors from "../../theme/color/ColorTheme";
import Logo from "../logo/Logo";
import fontSize from "../../theme/fonts/FontTheme";

const Wrapper = styled.div`
  max-width: 100%;
  padding: 50px 20px;
`;
const Container = styled.div`
  max-width: 1200px;
  max-height: max-content;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 0px 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  p {
    font-size: ${fontSize.m};
    color: ${colors.grayBase};
    width: 280px;
  }
`;
const Copyright = styled.span`
  padding-top: 24px;
  font-size: ${fontSize.xs};
  color: ${colors.grayBase};
  display: flex;
  align-items: center;
  gap: 8px;
  div {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${colors.primaryBase};

    @media (max-width: 470px) {
      display: none;
    }
  }

  @media (max-width: 470px) {
    flex-direction: column;
  }
`;
const Right = styled.div`
  display: flex;
  gap: 64px;

  @media (max-width: 520px) {
    flex-wrap: wrap;
    gap: 30px;
  }
`;

const LinkWrapper = styled.div``;

const LinkTitle = styled.span`
  display: block;
  padding-bottom: 16px;
  font-size: ${fontSize.m};
`;

const LinkList = styled.ul`
  padding: 0;
  list-style: none;
  li {
    padding: 8px 0px;
    font-size: ${fontSize.s};
    color: ${colors.grayBase};
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Top>
          <Left>
            <Logo />
            <p>
              Optimize your business strategy with expert consulting solutions
            </p>
          </Left>
          <Right>
            <LinkWrapper>
              <LinkTitle>Menu</LinkTitle>
              <LinkList>
                <li>Services</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>How it works</li>
                <li>Team</li>
                <li>Contact</li>
              </LinkList>
            </LinkWrapper>

            <LinkWrapper>
              <LinkTitle>Follow Us</LinkTitle>
              <LinkList>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Threads</li>
                <li>Twitter</li>
              </LinkList>
            </LinkWrapper>

            <LinkWrapper>
              <LinkTitle>Contact</LinkTitle>
              <LinkList>
                <li>org@inaing.com</li>
                <li>9817384733</li>
                <li>Kathmandu, Nepal</li>
              </LinkList>
            </LinkWrapper>
          </Right>
        </Top>
        <Copyright>
          <span>Copyright © 2020-2025</span> <div />{" "}
          <span>Inaing Tech All rights reserved</span>
        </Copyright>
      </Container>
    </Wrapper>
  );
}

export default Footer;
