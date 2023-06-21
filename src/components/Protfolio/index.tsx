import React, { MutableRefObject, useEffect, useState } from "react";
import Typed from "react-typed";
import { Box } from "@chakra-ui/react";
import "./index.css";

export function PortfolioCompanies() {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const targetHeight = 3800;

      if (scrollHeight >= targetHeight) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box className="portfolioContainer">
      <Box className="portfolioInnerContainer">
        <Box className="portfolioInnerContainerBg"></Box>
        <Box className="portfolioInnerContainerR">
          {isMobile ? (
            <Box
              className={
                animate
                  ? "portfolioInnerContainerText"
                  : "portfolioInnerContainerText"
              }
            >
              The Web3 technology PROJECT <br /> born in Cosmos
            </Box>
          ) : (
            <Box
              className={
                animate
                  ? "portfolioInnerContainerText"
                  : "portfolioInnerContainerText"
              }
            >
              The Web3 technology PROJECT <br /> born in{" "}
              {animate ? (
                <Typed
                  strings={["Cosmos"]}
                  typeSpeed={130}
                  showCursor={false}
                />
              ) : null}
            </Box>
          )}

          {/* <Box className="portfolioInnerContainerButton"> Side Labs</Box> */}
          <Box className={animate ? "arrows" : "arrows"}></Box>
        </Box>
      </Box>
    </Box>
  );
}
