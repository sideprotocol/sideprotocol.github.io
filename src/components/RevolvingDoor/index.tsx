import React from "react";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import "./index.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 20000, easing: (t: number) => t };

export function RevolvingDoor() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    }
  });

  return (
    <Box className="RevolvingDoor">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide revolvingDoorImg"></div>
        <div className="keen-slider__slide revolvingDoorImg"></div>
        <div className="keen-slider__slide revolvingDoorImg"></div>
      </div>
    </Box>
  );
}
