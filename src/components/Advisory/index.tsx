import React from "react";
import { Box } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "./index.css";
import "keen-slider/keen-slider.min.css";
import bg1 from "../../assets/image/advisory/1.png";
import bg2 from "../../assets/image/advisory/2.png";
import bg3 from "../../assets/image/advisory/3.png";

export function Advisory() {
  const [ref] = useKeenSlider<HTMLElement>({
    // mode: "free-snap",
    slides: {
      perView: 1.3
      // spacing: 15
    }
  });
  return (
    <Box className="advisoryContainer">
      <Box className="advisoryTitle">SIDE Blockchain </Box>
      {/* <Box className="advisoryText" marginBottom={40}>
      </Box> */}
      <ul className="advisoryUl advisoryUlPC">
        <li
          onClick={() => {
            window.open("https://docs.tendermint.com/", "_blank");
          }}
        >
          <img className="bg" src={bg1} alt="" />
          <h5>Tendermint Core</h5>
          <p>
            Best-in-class BFT consensus  engine that tolerates up to ⅓ of
            machines failing arbitrarily
          </p>
          <div className="arrow"></div>
        </li>
        <li
          onClick={() => {
            window.open("https://ibc.cosmos.network/", "_blank");
          }}
        >
          <img
            className="bg"
            style={{ marginLeft: "-20px" }}
            src={bg2}
            alt=""
          />
          <h5>IBC Protocol</h5>
          <p>
            Communicating protocol for relaying arbitrary messages between
            blockchains
          </p>
          <div className="arrow"></div>
        </li>
        <li
          onClick={() => {
            window.open("https://docs.cosmos.network/main", "_blank");
          }}
        >
          <img className="bg" src={bg3} alt="" />
          <h5>Cosmos SDK</h5>
          <p>
            Side Hub is a highly secure and scalable blockchain that is built
            using Cosmos SDK
          </p>
          <div className="arrow"></div>
        </li>
      </ul>

      <ul ref={ref} className="advisoryUl advisoryUlMobile keen-slider">
        <li
          onClick={() => {
            window.open("https://docs.tendermint.com/", "_blank");
          }}
          className="keen-slider__slide"
        >
          <img className="bg" src={bg1} alt="" />
          <h5>Tendermint Core</h5>
          <p>
            Best-in-class BFT consensus  engine that tolerates up to ⅓ of
            machines failing arbitrarily
          </p>
          <div className="arrowM"></div>
        </li>
        <li
          onClick={() => {
            window.open("https://ibc.cosmos.network/", "_blank");
          }}
          className="keen-slider__slide"
        >
          <img
            className="bg"
            style={{ marginLeft: "-10px" }}
            src={bg2}
            alt=""
          />
          <h5>IBC Protocol</h5>
          <p>
            Communicating protocol for relaying arbitrary messages between
            blockchains
          </p>
          <div className="arrowM"></div>
        </li>
        <li
          onClick={() => {
            window.open("https://docs.cosmos.network/main", "_blank");
          }}
          className="keen-slider__slide"
        >
          <img className="bg" src={bg3} alt="" />
          <h5>Cosmos SDK</h5>
          <p>
            Side Hub is a highly secure and scalable blockchain that is built
            using Cosmos SDK
          </p>
          <div className="arrowM"></div>
        </li>
      </ul>
    </Box>
  );
}
