import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CenterHeading from "../../components/heading/CenterHeading";

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 12px 20px;
  padding-bottom: 0;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  margin: auto;
  padding-bottom: 65px;
`;

const TeamList = styled.ul`
  display: flex;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translate}px);
`;

const TeamMember = styled.li`
  flex-shrink: 0;
  width: 280px;
  height: 320px;
`;

const TeamCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
  display: block;
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  padding: 10px;
`;

const Name = styled.p`
  color: white;
  margin: 0;
  font-weight: bold;
`;
const Position = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-size: 0.9rem;
`;

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Lead Consultant",
    img: "https://framerusercontent.com/images/PlN76M8KK3J8Iwj1r4XNicuoSeE.jpg",
  },
  {
    name: "James Carter",
    role: "Business Expert",
    img: "https://framerusercontent.com/images/epMeSwPDTkJjWDiv4bvNJfg.png",
  },
  {
    name: "Emily Ross",
    role: "Efficiency Specialist",
    img: "https://framerusercontent.com/images/mu2Kcpe51Vv4Vr6Lh3dGC4ppbd4.png",
  },
  {
    name: "Daniel Lee",
    role: "Financial & Growth Advisor",
    img: "https://framerusercontent.com/images/uss27WaFuXcw0eX1JpnuzZs.png",
  },
];

function TeamSection() {
  const [index, setIndex] = useState(0);
  const containerWidth = 1200;
  const itemWidth = 280 + 14;
  const loopMembers = [...teamMembers, ...teamMembers];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const translate =
    index < teamMembers.length
      ? -index * itemWidth
      : -(index - teamMembers.length) * itemWidth;

  return (
    <Wrapper>
      <CenterHeading
        subheading="Our team"
        heading="Meet the experts behind your business success"
      />
      <SliderContainer>
        <TeamList translate={translate}>
          {loopMembers.map((member, i) => (
            <TeamMember key={i}>
              <TeamCard>
                <TeamImage src={member.img} alt={member.name} />
                <TextWrapper>
                  <Name>{member.name}</Name>
                  <Position>{member.role}</Position>
                </TextWrapper>
              </TeamCard>
            </TeamMember>
          ))}
        </TeamList>
      </SliderContainer>
    </Wrapper>
  );
}

export default TeamSection;
