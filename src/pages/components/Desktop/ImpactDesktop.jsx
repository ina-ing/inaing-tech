import React from "react";
import styled from "styled-components";
import StatsPill from "../../../components/pill/StatsPill";
import ImpactImg from "../../../assets/images/impact.avif";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 382px;
  height: 500px;
  object-fit: cover;
  border-radius: 28px;
  display: block;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 85px;
  height: min-content;
  justify-content: center;
  overflow: hidden;
`;

function ImpactDesktop() {
  return (
    <Wrapper>
        <Side>
          <StatsPill tag="$7M+" title="Revenue" align="left" />
          <StatsPill tag="72%" title="Growth" align="left" lineWidth="125px" />
          <StatsPill tag="65%" title="Skills" align="left" />
        </Side>

        <Image src={ImpactImg} alt="impact" />

        <Side>
          <StatsPill tag="88%" title="Engagement" align="right" />
          <StatsPill
            tag="54%"
            title="Retention"
            align="right"
            lineWidth="125px"
          />
          <StatsPill tag="95%" title="Satisfaction" align="right" />
        </Side>
    </Wrapper>
  );
}

export default ImpactDesktop;
