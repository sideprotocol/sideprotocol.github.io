import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import "./index.css";
import "./carousel.css";
import { CarouselItem } from "./CarouselItem";

export const carouselItems = [
  {
    name: "Onchain Home for Web3",
    text: "SIDE is a cutting-edge, low-cost, developer-friendly Cosmos SDK based EVM blockchain built to be an open ecosystem that will bring the next billion users to web3",
    pic: "/image/1.png"
  },
  {
    name: "The best of Ethereum with interoperability of Cosmos",
    text: "SIDE unlocks the potential of Solidity-based smart contracts by providing an EVM equivalent. Developers can seamlessly deploy their contracts and tap into the scalability and interoperability offered by Cosmos. It ensures effortless compatibility with existing code, tools, and infrastructure.",
    pic: "/image/2.png"
  },
  {
    name: "Developer-centric Ecosystem with Incentives",
    text: "An ecosystem built to empower innovation with result-driven incentives. Unleash your creativity and thrive in a seamless, rewarding blockchain environment",
    pic: "/image/3.png"
  },
  {
    name: "Unrivaled Transaction Handling and Scaling",
    text: "With unmatched scalability and single-block finality, the backbone of SIDE enables it to effortlessly caters to the transaction demands of the evolving Web3 landscape.",
    pic: "/image/4.png"
  }
];

export function Carousel({ setSlide }: { setSlide: number }) {
  useEffect(() => {}, [setSlide]);

  return (
    <Box className="carouselContainer">
      <Box className="carouselContent">
        <Box className="keen-slider">
          <img
            src={carouselItems[setSlide].pic}
            alt=""
            className="carouselContentImg"
          />
        </Box>
      </Box>
    </Box>
  );
}
