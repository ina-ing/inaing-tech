import React, { useState, useEffect } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import styled from "styled-components";
import colors from "../../theme/color/ColorTheme";
import CenterHeading from "../../components/heading/CenterHeading";
import fontSize from "../../theme/fonts/FontTheme";

const carouselData = [
  {
    title: "Business consulting",
    desc: "Tailored strategies for growth",
    img: "https://framerusercontent.com/images/0YczDvjwpwN80wyyW0HHaSg0VA.jpg",
  },
  {
    title: "Operational efficiency",
    desc: "Optimize workflows and processes",
    img: "https://framerusercontent.com/images/iL1g2JceXoecOESZCnxxGh4SA.jpg",
  },
  {
    title: "Market research",
    desc: "Insights & competitor analysis",
    img: "https://framerusercontent.com/images/F8bRxnZXtathTlYe6oa9P55kjsY.jpg",
  },
  {
    title: "Digital transformation",
    desc: "Modernize your business",
    img: "https://framerusercontent.com/images/WWbcr9xA8ezJ0nrGh99vBWXbBs.jpg",
  },
];

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #f5f7f9;
  padding: 50px 0px;
  overflow: hidden;

  @media (max-width: 600px) {
    margin: 30px auto;
    padding: 30px 20px;
  }
`;

const GalleryWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;

  @media (max-width: 600px) {
    height: 300px;
    margin-top: 30px;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: transform 0.5s ease;

  @media (max-width: 600px) {
    gap: 0;
  }
`;

const ImageCard = styled.div`
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.isCenter
      ? `
    height: 405px;
    width: 580px;
  `
      : `
    height: 340px;
    width: 480px;
  `}
  ${(props) =>
    props.isCenter &&
    `
    z-index: 10;
  `}

  ${(props) =>
    !props.isCenter &&
    `
    opacity: 0.85;
    transform: scale(0.9);
  `}

  @media (max-width: 600px) {
    transition: all 0.6s ease;
    ${(props) =>
      props.isCenter
        ? `
        height: 340px;
        width: 90vw;
        margin: 0 auto;
      `
        : `
        display: none;
      `}
  }
`;

const Image = styled.img`
  border-radius: 20px;
  object-fit: cover;
  height: 100%;
  width: 100%;
  transform: ${(props) => (props.isCenter ? "scale(1)" : "scale(0.9)")};
  transition: none;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.6) 66%,
    #000 100%
  );
  pointer-events: none;
  border-radius: 20px;
  transform: ${(props) => (props.isCenter ? "scale(1)" : "scale(0.9)")};

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  height: 50px;
  width: fit-content;
  transform: ${(props) => (props.isCenter ? "scale(1.1)" : "scale(0.9)")};
  margin: 30px;

  @media (max-width: 600px) {
    margin: 15px;
    transform: scale(1);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  margin: 5px 0 0;
  font-size: ${fontSize.s};
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${colors.primaryBase};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%);
  }

  ${(props) =>
    props.direction === "left"
      ? `
    left: calc(50% - 310px);
  `
      : `
    right: calc(50% - 310px);
  `}

  svg {
    width: 22px;
    height: 22px;
    fill: none;
    stroke: ${colors.white};
    stroke-width: 2;
  }

  @media (max-width: 600px) {
    ${(props) =>
      props.direction === "left"
        ? `
        left: -10px;
      `
        : `
        right: -10px;
      `}
    width: 32px;
    height: 32px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

function ServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const getVisibleImages = () => {
    const images = [];
    const total = carouselData.length;

    // For mobile screens, only show the center image
    if (isMobile) {
      images.push({
        ...carouselData[currentIndex],
        index: currentIndex,
        isCenter: true,
      });
      return images;
    }

    const prevIndex = (currentIndex - 1 + total) % total;
    images.push({
      ...carouselData[prevIndex],
      index: prevIndex,
      isCenter: false,
    });

    images.push({
      ...carouselData[currentIndex],
      index: currentIndex,
      isCenter: true,
    });

    const nextIndex = (currentIndex + 1) % total;
    images.push({
      ...carouselData[nextIndex],
      index: nextIndex,
      isCenter: false,
    });

    return images;
  };

  return (
    <Wrapper>
      <CenterHeading
        subheading={"Services"}
        heading={"Reliable expertise to drive your greatest success"}
      />
      <GalleryWrapper>
        <ArrowButton
          direction="left"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <LuArrowLeft />
        </ArrowButton>

        <CarouselContainer>
          {getVisibleImages().map((item, index) => (
            <ImageCard key={item.index} isCenter={item.isCenter}>
              <Image src={item.img} alt={item.title} isCenter={item.isCenter} />
              <GradientOverlay isCenter={item.isCenter} />
              <ImageOverlay isCenter={item.isCenter}>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
              </ImageOverlay>
            </ImageCard>
          ))}
        </CarouselContainer>

        <ArrowButton
          direction="right"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <LuArrowRight />
        </ArrowButton>
      </GalleryWrapper>
    </Wrapper>
  );
}

export default ServiceSection;
