import React, { useEffect, useRef, useState } from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { debounce } from "lodash";
import "./index.css";
import { Carousel, carouselItems } from "./carousel";

export function ResearchReport() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    startCarousel();

    return () => {
      stopCarousel();
    };
  }, []);

  const startCarousel = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % carouselItems.length);
    }, 5000);
  };

  const stopCarousel = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseEnter = () => {
    stopCarousel();
  };

  const handleMouseLeave = () => {
    startCarousel();
  };

  const handleItemClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <Box className="researchContainer animated zoomInLeft">
      {isMobile ? (
        <>
          <Box className="title mg">
            Embrace SIDE
            <br /> blockchain and Transform <br /> possibilities into reality
          </Box>
        </>
      ) : (
        <>
          <Box className="title mg">Embrace SIDE blockchain and</Box>
          <Box className="title">Transform possibilities into reality</Box>
        </>
      )}

      <Box className="researchContent">
        <Box className="moon"></Box>
        <Box className="moon1"></Box>

        <Box className="researchContentBox">
          <Box position="relative" className="researchContentBoxHs">
            <Box className="researchSlideStartIndexer" />
            {isMobile ? (
              <Box
                className="researchSlideCurrentIndexer"
                style={{
                  top: `${(currentSlide / (carouselItems.length - 1)) * 48}%`
                }}
              />
            ) : (
              <Box
                className="researchSlideCurrentIndexer"
                style={{
                  top: `${(currentSlide / (carouselItems.length - 1)) * 80}%`
                }}
              />
            )}

            <Divider orientation="vertical" />
          </Box>
        </Box>

        <Box
          className="researchContentSildeBox"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Box className="researchContentSildeBoxW">
            <Box className="researchContentClick">
              <ul className="researUl">
                {carouselItems.map((item, index) => (
                  <li
                    key={index}
                    className={index === currentSlide ? "liActive" : ""}
                    onClick={() => handleItemClick(index)}
                  >
                    <h5>{item.name}</h5>
                    <p className={index === currentSlide ? "active" : ""}>
                      {item.text}
                    </p>
                    {isMobile ? (
                      <img
                        src={item.pic}
                        className="researUlImg"
                        alt=""
                        style={{
                          display: index === currentSlide ? "block" : "none"
                        }}
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </Box>
            <Box className="researchContentImg">
              <Carousel setSlide={currentSlide} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
