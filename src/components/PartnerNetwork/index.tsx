import React, { MutableRefObject, useEffect, useState } from "react";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import bg1 from "../../assets/image/partner/1.png";
import bg2 from "../../assets/image/partner/2.png";
import bg3 from "../../assets/image/partner/3.png";

import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import "./index.css";

export function PartnerNetwork() {
  const [off, setOff] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    // loop: true,
    mode: "free",
    slides: {
      perView: 1.2,
      spacing: 30
    },
    initial: 0
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 3,
        spacing: 10
      }
    },
    [ThumbnailPlugin(instanceRef)]
  );

  function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
  ): KeenSliderPlugin {
    return slider => {
      function removeActive() {
        slider.slides.forEach(slide => {
          slide.classList.remove("slideTltieAfter");
        });
      }
      function addActive(idx: number) {
        slider.slides[idx].classList.add("slideTltieAfter");
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx);
          });
        });
      }

      slider.on("created", () => {
        if (!mainRef.current) return;
        addActive(slider.track.details.rel);
        addClickEvents();
        mainRef.current.on("animationStarted", main => {
          removeActive();
          const next = main.animator.targetIdx || 0;
          addActive(main.track.absToRel(next));
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
          console.log(next);
        });
      });
    };
  }

  useEffect(() => {
    setTimeout(() => {
      setOff(true);
    }, 50);
  }, []);

  return (
    <Box className="partnerContainer">
      <Box className="partnerContainerBox">
        <Box className="tltie">Interchain Technologies</Box>

        <Box>
          {off ? (
            <div ref={thumbnailRef} className="keen-slider thumbnail">
              <div
                className="keen-slider__slide slideTltieAfter slideTltie"
                style={{ marginLeft: "-90px" }}
              >
                Interchain Open Market
              </div>
              <div
                className="keen-slider__slide slideTltie"
                style={{ margin: "0 80px 0 -100px" }}
              >
                Mesh Liquidity Network
              </div>
              <div
                className="keen-slider__slide slideTltie"
                style={{ margin: "0 0px 0 -200px" }}
              >
                Builders' Mining
              </div>
            </div>
          ) : null}

          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide slideBg">
              <img src={bg1} alt="" />
              <h5>Interchain Open Market</h5>
              <p>
                Result-driven adopt-to-earn mechanism built for Side blockchain
                to align ecosystem developers’ interests with network growth.
              </p>
              <a className="partnerNetworkButton">Read More &gt; </a>
            </div>
            <div className="keen-slider__slide slideBg">
              <img src={bg2} alt="" />
              <h5>Mesh Liquidity Network</h5>
              <p>
                Utilized by Side’s novel inter-blockchain AMM-based swap
                protocol, a cross-chain liquidity network is created in a
                distributed, bridgeless and interconnected manner. Read More
              </p>
              <a className="partnerNetworkButton">Read More &gt; </a>
            </div>
            <div className="keen-slider__slide slideBg">
              <img src={bg3} alt="" />
              <h5>Builders' Mining</h5>
              <p>
                Result-driven adopt-to-earn mechanism built for Side blockchain
                to align ecosystem developers’ interests with network growth.
              </p>
              <a className="partnerNetworkButton">Read More &gt; </a>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
