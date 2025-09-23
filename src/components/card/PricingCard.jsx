import React from "react";
import styled from "styled-components";
import colors from "../../theme/color/ColorTheme";
import fontFamily from "../../theme/fonts/FontFamily";
import fontSize from "../../theme/fonts/FontTheme";
import { IoMdCheckmark } from "react-icons/io";
import { IoSparklesSharp } from "react-icons/io5";

const Wrapper = styled.div`
  width: 100%;
  padding: 4px;
  max-width: 405px;
  border-radius: 28px;
  border: 1px solid rgba(31, 81, 76, 0.05);
  overflow: hidden;
`;

const GradientLayer = styled.div`
  border-radius: 26px;

  background: ${({ variant }) =>
    variant === "primary"
      ? `linear-gradient(
    180deg,
    rgba(210, 228, 254, 0.2) 0%, 
    rgba(210, 228, 254, 0) 100%
  )`
      : `linear-gradient(
    180deg,
    rgba(231, 241, 255) 0%, 
    rgba(231, 241, 255, 0) 100%
  )`};

  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.label`
  font-weight: 500;
  display: block;
  font-size: 28px;
`;

const Tag = styled.div`
  color: ${colors.white};
  font-size: ${fontSize.xxs};
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${colors.primaryBase};
  padding: 6px 10px;
  svg {
    color: ${colors.white};
    height: 14px;
    width: 14px;
    flex-shrink: 0;
  }
`;

const Subtitle = styled.div`
  color: ${colors.grayBase};
  font-size: ${fontSize.s};
`;

const PriceTag = styled.div`
  display: flex;
  gap: 10px;
  h1 {
    font-size: ${fontSize.huge};
    font-family: ${fontFamily.secondary};
  }
  span {
    padding-top: 28px;
    color: ${colors.grayBase};
    font-size: ${fontSize.m};
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: ${fontSize.s};
  border-radius: 24px;

  ${(props) =>
    props.variant === "primary" &&
    `
    background: ${colors.white};
    color: ${colors.black};
    border: 1px solid ${colors.grayTint};
    }
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background: ${colors.primaryBase};
    color: ${colors.white};
    border:none;
    }
  `}
`;
const CheckPoints = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  li {
    list-style: none;
    font-size: ${fontSize.m};
    color: ${colors.grayBase};
    padding: 12px 0px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  svg {
    flex-shrink: 0;
    height: 20px;
    width: 20px;
    color: ${colors.primaryBase};
  }
`;

const PricingCard = ({
  title,
  subtitle,
  price,
  cta,
  features,
  tag,
  variant = "primary",
}) => (
  <Wrapper>
    <GradientLayer variant={variant}>
      <Top>
        <Title>{title}</Title>
        {tag && (
          <Tag>
            <IoSparklesSharp /> {tag}
          </Tag>
        )}
      </Top>
      <Subtitle>{subtitle}</Subtitle>
      <PriceTag>
        <h1>{price}</h1>
        <span>/{variant}</span>
      </PriceTag>
      <Button variant={variant}>{cta}</Button>
      <CheckPoints>
        {features.map((feature, index) => (
          <li key={index}>
            <IoMdCheckmark /> {feature}
          </li>
        ))}
      </CheckPoints>
    </GradientLayer>
  </Wrapper>
);

export default PricingCard;
