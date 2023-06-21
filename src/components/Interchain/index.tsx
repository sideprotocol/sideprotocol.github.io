import React, { MutableRefObject, useEffect, useState } from "react";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import bg1 from "../../assets/image/Interchain/1.png";
import bg2 from "../../assets/image/Interchain/2.png";
import bg3 from "../../assets/image/Interchain/3.png";

import "./index.css";

export function Interchain() {
  const [animate, setAnimate] = useState(false);
  const [animate1, setAnimate1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const targetHeight = 2200;
      const targetHeight1 = 2500;

      // if (scrollHeight >= targetHeight) {
      //   setAnimate(true);
      // }
      // if (scrollHeight >= targetHeight) {
      //   setAnimate1(true);
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 空依赖数组确保只注册一次滚动事件

  return (
    <Box className="InterchainContainer">
      <Box className="InterchainContainerBox">
        <Box className="tltie">Interchain Technologies</Box>

        <Box
          className={
            animate
              ? "InterchainContainerLR showPC animated rollIn"
              : "InterchainContainerLR showPC"
          }
        >
          <Box className="InterchainContainerL">
            <h5 className="InterchainContainerLRTltie">
              Interchain Marketplace
            </h5>
            <p className="InterchainContainerLRP">
              The Interchain Atomic Swap (IAS) protocol is the first scalable
              atomic swap in the blockchain space. It empowers an omnichain
              asset open market, enabling peer-to-peer trading across different
              chains without the need for bridging
            </p>
            <Box
              className="InterchainContainerButton button button--rayen button--border-thick button--text-thick"
              data-text="Read More"
              onClick={() => {
                window.open("https://docs.side.one", "_blank");
              }}
            >
              <span>Read More</span>
            </Box>
          </Box>
          <Box className="InterchainContainerR" style={{ textAlign: "right" }}>
            <img
              className="InterchainContainerLRPImg"
              style={{ margin: "-60px 0 80px 70px" }}
              src={bg2}
            ></img>
          </Box>
        </Box>

        <Box
          className={
            animate1
              ? "InterchainContainerLR showPC animated rollIn"
              : "InterchainContainerLR showPC"
          }
        >
          <Box className="InterchainContainerL">
            <img
              className="InterchainContainerLRPImg"
              style={{
                margin: "-60px 0 80px -70px",
                width: "467px",
                height: "306px"
              }}
              src={bg1}
            ></img>
          </Box>
          <Box className="InterchainContainerR">
            <h5 className="InterchainContainerLRTltie">Builderland</h5>
            <p className="InterchainContainerLRP">
              Result-driven adopt-to-earn mechanism built for SIDE blockchain,
              aligning ecosystem developer interests with network growth.
            </p>
            <Box
              className="InterchainContainerButton button button--rayen button--border-thick button--text-thick"
              data-text="Read More"
              onClick={() => {
                window.open("https://docs.side.one", "_blank");
              }}
            >
              <span>Read More</span>
            </Box>
          </Box>
        </Box>

        <Box
          className={
            animate
              ? "InterchainContainerLR showPC animated rollIn"
              : "InterchainContainerLR showPC"
          }
        >
          <Box className="InterchainContainerL">
            <h5 className="InterchainContainerLRTltie">
              Mesh Liquidity Network
            </h5>
            <p className="InterchainContainerLRP">
              Utilized by Side’s novel inter-blockchain AMM-based swap protocol,
              a onmichain liquidity network is created in a distributed,
              bridgeless and interconnected manner
            </p>
            <Box
              className="InterchainContainerButton button button--rayen button--border-thick button--text-thick"
              data-text="Read More"
              onClick={() => {
                window.open("https://docs.side.one", "_blank");
              }}
            >
              <span>Read More</span>
            </Box>
          </Box>
          <Box className="InterchainContainerR" style={{ textAlign: "right" }}>
            <img
              className="InterchainContainerLRPImg"
              style={{
                margin: "-60px 0 0 70px",
                width: "383px",
                height: "345px"
              }}
              src={bg3}
            ></img>
          </Box>
        </Box>

        <Box
          className={
            animate
              ? "InterchainContainerLR showM animated rollIn"
              : "InterchainContainerLR showM"
          }
        >
          <Box className="InterchainContainerL">
            <h5 className="InterchainContainerLRTltie">
              Interchain Marketplace
            </h5>
            <p className="InterchainContainerLRP">
              The Interchain Atomic Swap (IAS) protocol is the first scalable
              atomic swap in the blockchain space. It empowers an omnichain
              asset open market, enabling peer-to-peer trading across different
              chains without the need for bridging
            </p>
            <img
              className="InterchainContainerLRPImg"
              style={{
                width: "198px",
                height: "216px"
              }}
              src={bg2}
            ></img>
            <Box
              className="InterchainContainerButton button button--rayen button--border-thick button--text-thick"
              data-text="Read More"
              onClick={() => {
                window.open("https://docs.side.one", "_blank");
              }}
            >
              <span>Read More</span>
            </Box>
          </Box>
        </Box>

        <Box
          className={
            animate1
              ? "InterchainContainerLR showM animated rollIn"
              : "InterchainContainerLR showM"
          }
        >
          <Box className="InterchainContainerR">
            <h5 className="InterchainContainerLRTltie">Builderland</h5>
            <p className="InterchainContainerLRP">
              Result-driven adopt-to-earn mechanism built for SIDE blockchain,
              aligning ecosystem developer interests with network growth.
            </p>
            <img
              className="InterchainContainerLRPImg"
              style={{
                width: "243px",
                height: "158px"
              }}
              src={bg1}
            ></img>
            <Box
              className="InterchainContainerButton button button--rayen button--border-thick button--text-thick"
              data-text="Read More"
              onClick={() => {
                window.open("https://docs.side.one", "_blank");
              }}
            >
              <span>Read More</span>
            </Box>
          </Box>
        </Box>

        <Box
          className={
            animate
              ? "InterchainContainerLR showM animated rollIn"
              : "InterchainContainerLR showM"
          }
        >
          <Box className="InterchainContainerL">
            <h5 className="InterchainContainerLRTltie">
              Mesh Liquidity Network
            </h5>
            <p className="InterchainContainerLRP">
              Utilized by Side’s novel inter-blockchain AMM-based swap protocol,
              a onmichain liquidity network is created in a distributed,
              bridgeless and interconnected manner
            </p>
            <img
              className="InterchainContainerLRPImg"
              style={{
                width: "208px",
                height: "192px"
              }}
              src={bg3}
            ></img>
            <Box
              className="InterchainContainerButton button button--rayen button--border-thick button--text-thick"
              data-text="Read More >"
              onClick={() => {
                window.open("https://docs.side.one", "_blank");
              }}
            >
              <span>Read More</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
