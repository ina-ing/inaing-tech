import React from "react";
import styled from "styled-components";
import StatsPill from "../../../components/pill/StatsPill";
import ImpactImg from "../../../assets/images/impact.avif";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 24px 0px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 28px;
  display: block;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  height: min-content;
  overflow: hidden;
`;

function ImpactMobile() {
  return (
    <Wrapper>
      <Top>
        <Side>
          <StatsPill tag="$7M+" title="Revenue" align="left" />
          <StatsPill tag="72%" title="Growth" align="left" lineWidth="125px" />
          <StatsPill tag="65%" title="Skills" align="left" />
        </Side>
        <Side>
          <StatsPill tag="88%" title="Impact" align="right" />
          <StatsPill
            tag="54%"
            title="Designers"
            align="right"
            lineWidth="125px"
          />
          <StatsPill tag="95%" title="Consultants" align="right" />
        </Side>
      </Top>
      <Image src={ImpactImg} alt="impact" />
    </Wrapper>
  );
}

export default ImpactMobile;
