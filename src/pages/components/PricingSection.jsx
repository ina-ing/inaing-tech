import React from "react";
import styled from "styled-components";
import CenterHeading from "../../components/heading/CenterHeading";
import PricingCard from "../../components/card/PricingCard";

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto;
  box-sizing: border-box;
  padding: 0px 20px;
`;
const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

function PricingSection() {
  const plans = [
    {
      variant: "primary",
      title: "Standard",
      subtitle:
        "Perfect for small teams looking to streamline consulting processes",
      price: "$99",
      cta: "Request Consultation",
      features: [
        "Personalized strategy sessions",
        "Essential business analytics",
        "Core reporting tools",
        "Up to 5 team members",
        "Dedicated email support",
        "Customizable workflow insights",
      ],
    },
    {
      variant: "secondary",
      title: "Premium",
      subtitle:
        "Designed for growing consulting firms needing insights & support.",
      price: "$299",
      cta: "Get Started",
      tag: "Popular",
      features: [
        "Unlimited strategy consultations",
        "Advanced business analytics",
        "Comprehensive reporting suite",
        "Up to 10 team members",
        "Customizable workflow insights",
        "Priority email & chat support",
      ],
    },
  ];

  return (
    <Wrapper>
      <CenterHeading
        subheading={"Pricing"}
        heading={"Flexible pricing tailored to your business needs"}
      />
      <Container>
        {plans.map((plan, i) => (
          <PricingCard key={i} {...plan}/>
        ))}
      </Container>
    </Wrapper>
  );
}

export default PricingSection;
