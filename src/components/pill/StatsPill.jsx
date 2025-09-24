import React from "react";
import styled from "styled-components";
import colors from "../../theme/color/ColorTheme";
import fontSize from "../../theme/fonts/FontTheme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &.left {
    flex-direction: row;
    justify-content: flex-end;

    &::after {
      content: "";
      width: ${(props) => props.$lineWidth || "90px"};
      height: 1px;
      background-color: rgba(23, 45, 95, 0.2);
    }
    @media (max-width: 800px) {
      justify-content: flex-start;
      &::after {
        content: none;
      }
    }
  }

  &.right {
    flex-direction: row-reverse;
    justify-content: flex-end;

    &::after {
      content: "";
      width: ${(props) => props.$lineWidth || "90px"};
      height: 1px;
      background-color: rgba(23, 45, 95, 0.2);
    }
    @media (max-width: 800px) {
      justify-content: flex-start;
      &::after {
        content: none;
      }
    }
  }
`;

const Pill = styled.div`
  display: flex;
  gap: 8px;
  background-color: ${colors.grayLight};
  padding: 4px 8px;
  border-radius: 24px;
  align-items: center;
  white-space: nowrap;
`;

const Tag = styled.div`
  padding: 6px 10px;
  border-radius: 24px;
  background-color: ${colors.primaryBase};
  color: ${colors.white};
  font-weight: 600;
`;

const Title = styled.span`
  font-size: ${fontSize.s};
`;

function StatsPill({ tag, title, align = "left", lineWidth }) {
  return (
    <Wrapper className={align} $lineWidth={lineWidth}>
      <Pill>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
      </Pill>
    </Wrapper>
  );
}

export default StatsPill;
