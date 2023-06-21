import React from "react";
import { Box } from "@chakra-ui/react";
import "./index.css";
import "./carousel.css";

export function CarouselItem({
  name,
  url,
  pic
}: {
  name: string;
  url: string;
  pic: string;
}) {
  return (
    <Box className="keen-slider__slide">
      <Box className="carouselImage">
        {/* <img src={!pic.startsWith('http')  ? require(pic!).default : pic} alt="" /> */}
        <img src={pic} alt="" />
      </Box>
      <Box className="carouselText">{name}</Box>
      {/* <Box className="carouselItemDetail" onClick={() => window.open(url)}>
        Detail
        <Box className="carouselItemArrow" />
      </Box> */}
    </Box>
  );
}
