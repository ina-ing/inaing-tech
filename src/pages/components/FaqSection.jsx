import React, { useState, useRef } from "react";
import styled from "styled-components";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import CenterHeading from "../../components/heading/CenterHeading";
import fontSize from "../../theme/fonts/FontTheme";
import colors from "../../theme/color/ColorTheme";

const Wrapper = styled.div`
  max-width: 550px;
  margin: 0 auto;
  padding: 60px 20px;
  box-sizing: border-box;
`;

const FAQItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid rgba(20, 20, 20, 0.05);
`;

const Question = styled.div`
  cursor: pointer;
  display: flex;
  font-size: ${fontSize.m};
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  letter-spacing: -0.9px;
`;

const AnswerWrapper = styled.div`
  overflow: hidden;
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const AnswerContent = styled.div`
  padding: 8px 0 12px 0;
  color: #333;
  line-height: 1.6;
  font-size: ${fontSize.s};
  letter-spacing: -0.8px;
  color: ${colors.grayBase};
`;

const IconWrapper = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${colors.primaryBase};
  transition: background-color 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
  svg {
    height: 14px;
    width: 14px;
    color: ${colors.white};
    display: block;
  }
`;

const faqData = [
  {
    question: "How does your consulting process work??",
    answer:
      "We begin with a detailed consultation to understand your needs, followed by tailored strategies and ongoing support to drive measurable results.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We begin with a detailed consultation to understand your needs, followed by tailored strategies and ongoing support to drive measurable results.",
  },
  {
    question: "How long does it take to see results??",
    answer:
      "We begin with a detailed consultation to understand your needs, followed by tailored strategies and ongoing support to drive measurable results.",
  },
  {
    question: "Do you offer one-time consultations?",
    answer:
      "We begin with a detailed consultation to understand your needs, followed by tailored strategies and ongoing support to drive measurable results.",
  },
  {
    question: "Can small businesses afford your services?",
    answer:
      "We begin with a detailed consultation to understand your needs, followed by tailored strategies and ongoing support to drive measurable results.",
  },
  {
    question: "How do I get started?",
    answer:
      "We begin with a detailed consultation to understand your needs, followed by tailored strategies and ongoing support to drive measurable results.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState([]);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (answerRefs.current[index]) {
      const newHeights = [...heights];
      newHeights[index] = answerRefs.current[index].scrollHeight;
      setHeights(newHeights);
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper>
      <CenterHeading
        subheading={"FAQ"}
        heading={"Answers to your most common questions"}
      />
      {faqData.map((item, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleFAQ(index)}>
            {item.question}
            {openIndex === index ? (
              <IconWrapper>
                <HiChevronUp />
              </IconWrapper>
            ) : (
              <IconWrapper>
                <HiChevronDown />
              </IconWrapper>
            )}
          </Question>
          <AnswerWrapper
            maxHeight={openIndex === index ? heights[index] || 0 : 0}
          >
            <AnswerContent ref={(el) => (answerRefs.current[index] = el)}>
              {item.answer}
            </AnswerContent>
          </AnswerWrapper>
        </FAQItem>
      ))}
    </Wrapper>
  );
}

export default FaqSection;
