import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import "./index.css";

export function Banner() {
  const [number, setNumber] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber >= 10) {
          clearInterval(timer);
        }
        return prevNumber + 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer); // 组件卸载时清除定时器
    };
  }, []);

  const renderTypedText = (
    condition: boolean,
    strings: string[],
    typeSpeed: number,
    className: string
  ): React.ReactNode => {
    return condition ? (
      <Box className={className}>
        <Typed strings={strings} typeSpeed={typeSpeed} showCursor={false} />
      </Box>
    ) : null;
  };

  return (
    <Box className="bannerContainer animated fadeInLeft">
      <Box className="bannerBg1" />

      {!isMobile ? (
        <Box className="bannerContent ">
          <Box className="bannerSlogan">
            <Typed
              strings={["Discover The"]}
              typeSpeed={70}
              showCursor={false}
            />
          </Box>

          {/* {renderTypedText(number > 1, ["TheComing"], 80, "bannerSlogan")} */}

          {renderTypedText(number > 1, ["Unexplored Side"], 80, "bannerSlogan")}

          {renderTypedText(
            number > 3,
            [
              "Enter the Web of Endless Opportunities and Unleash Limitless Potential"
            ],
            40,
            "bannerText"
          )}
          {number > 7 ? (
            <>
              <Box
                className="joinCommunity  button--rayen button--border-thick button--text-thick animated fadeInLeft"
                data-text="Join Community"
                onClick={() => {
                  window.open(
                    "https://discord.com/invite/GN99earcFR",
                    "_blank"
                  );
                }}
              >
                <span>Join Community</span>
              </Box>
            </>
          ) : null}
        </Box>
      ) : (
        <Box className="bannerContent ">
          <Box className="bannerSlogan">Discover The</Box>
          <Box className="bannerSlogan">Unexplored Side</Box>
          <Box className="bannerText">
            Enter the Web of Endless Opportunities and Unleash Limitless
            Potential
          </Box>

          <Box
            className="joinCommunity  button--rayen button--border-thick button--text-thick animated fadeInLeft"
            data-text="Join Community"
            onClick={() => {
              window.open("https://discord.com/invite/GN99earcFR", "_blank");
            }}
          >
            <span>Join Community</span>
          </Box>
        </Box>
      )}
    </Box>
  );
}
