"use client";
import Image from "next/image";
import sideExchange from "./img/side_exchange.webp";
import sideExchangeLogo from "./img/side_exchange_logo.svg";

export default function Exchange() {
  return <div>
     <div className="flex items-center justify-around px-10"
     style={{ borderBottom: "1px solid #363636" }}>
        <div>
          <Image src={sideExchange} className="w-[520px] h-[520px]" />
        </div>
        <div className="">
          <Image src={sideExchangeLogo} className="mb-5" />
          <div className="text-[28px]">With unmatched scalability and</div>
          <div className="text-[28px]">single-blocke evolving </div>
          <div className="mt-12 cursor-pointer rounded-full inline-block bg-[#262626] text-[20px] px-10 py-5">Get Start</div>
        </div>
      </div>
  </div>;
}
