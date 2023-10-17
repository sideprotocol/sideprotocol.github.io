"use client";
import Image from "next/image";
import sideMarketRound from "./img/side_market_round.svg";
import sideMarketIcon from "./img/side_market_icon.svg";

export default function Market() {
  return (
    <div className="">
      <div className="h-[50vh]">
        <div className="m-40 font-semibold text-[42px] text-center relative">
          <Image src={sideMarketRound} className="h-[60px] w-[60px] absolute -top-[60px]" />
          <div>EMBRACE SIDE AND</div>
          <div>TRANSFORM POSSIBILITIES</div>
          <div>INTO REALITY</div>
          <Image src={sideMarketIcon} className="h-[52px] w-[52px] absolute right-0" />
        </div>
      </div>
    </div>
  );
}
