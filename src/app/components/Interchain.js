"use client";
import { useState } from "react";
import Image from "next/image";
import sideCore from "./img/side_core.webp";
import sideSdk from "./img/side_cosmossdk.webp";
import sideIbc from "./img/side_ibc.webp";
import sideGo from "./img/side_go.svg";
export default function Interchain() {
  const [tab, setTab] = useState("0");
  const tabList = [
    {
      title: "Tendermint Core",
      id: "0",
      img: sideCore,
      imgStyle: 'h-[350px] w-[350px]',
      subTitle:
        "Best-In-Class BFT Consensus Engine That Tolerates Up To ⅓ Of Machines Failing Arbitrarily",
    },
    {
      title: "Cosmos SDK",
      id: "1",
      img: sideSdk,
      imgStyle: 'h-[350px] w-[400px]',
      subTitle:
        "SIDE chain is a highly secure and scalable blockchain that is built using Cosmos SDK",
    },
    {
      title: "IBC Protocol",
      id: "2",
      img: sideIbc,
      imgStyle: 'h-[350px] w-[400px]',
      subTitle:
        "Communicating Protocol For Relaying Arbitrary Messages Between Blockchains",
    },
  ];
  return (
    <section className="one-page border-b border-solid border-[#363636]">
      <div className="text-[42px] font-semibol text-center">
        Interchain Stack
      </div>
      {/* tab */}
      <div className="text-center mt-[50px]">
        <div
          className="rounded-lg py-[10px] px-[17px] inline-flex items-center gap-4"
          style={{ border: "0.5px solid #d9d9d980" }}
        >
          {tabList.map((item, index) => {
            return (
              <div
                key={index}
                className={`rounded-lg cursor-pointer px-4 py-2 ${
                  tab === item.id ? "bg-[#202020]" : ""
                }`}
                onClick={() => {
                  setTab(item.id);
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      {/* tab content */}
      <div className="flex items-center justify-center gap-20 mt-14">
        <Image src={tabList[tab].img} className={`${tabList[tab].imgStyle}`} alt="side"/>
        <div>
          <div className="text-4xl font-semibold mb-8">{tabList[tab].title}</div>
          <div className="text-[28px] font-light w-[400px]">{tabList[tab].subTitle}</div>
          <div className="mt-9 cursor-pointer">
            <Image src={sideGo} className="" alt="side"/>
          </div>
        </div>
      </div>
    </section>

  );
}
