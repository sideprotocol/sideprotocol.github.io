"use client";
import Image from "next/image";
import sideMarketRound from "./img/side_market_round.svg";
import sideMarketIcon from "./img/side_market_icon.svg";
import sideMarket from "./img/side_market.webp";
import sideMarketLogo from "./img/side_market_logo.svg";
export default function Market() {
  return (
    <div className="w-full ">
      {/*  */}
      <div className="h-[50vh] flex justify-center items-center py-72">
        <div className=" font-semibold text-[42px] text-center relative">
          <Image
            src={sideMarketRound}
            className="h-[60px] w-[60px] absolute -top-[60px] -left-[120px]"
            alt="side"
          />
          <div>EMBRACE SIDE AND</div>
          <div>TRANSFORM POSSIBILITIES</div>
          <div>INTO REALITY</div>
          <Image
            src={sideMarketIcon}
            className="h-[52px] w-[52px] absolute right-[52px]"
            alt="side"
          />
        </div>
      </div>
      {/*  */}
      <div
        className="flex items-center justify-around px-10"
        style={{ borderBottom: "1px solid #363636" }}
      >
        <div className="">
          <Image src={sideMarketLogo} className="mb-5" alt="side"/>
          <div className="text-[28px]">With unmatched scalability and</div>
          <div className="text-[28px]">single-blocke evolving </div>
          <div className="mt-12 cursor-pointer rounded-full inline-block bg-[#262626] text-[20px] px-10 py-5">
            Get Start
          </div>
        </div>

        <div>
          <Image src={sideMarket} className="w-[520px] h-[520px]" alt="side"/>
        </div>
      </div>
    </div>
  );
}
