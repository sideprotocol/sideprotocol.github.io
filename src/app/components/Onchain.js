"use client";
import Image from "next/image";
import sideOnchain from "./img/side_onchainhome.webp";
import sideCentric from "./img/side_centric.webp";
import sideUnrivaled from "./img/side_unrivaled.webp";
export default function Onchain() {
  const BlockList = [
    {
      title: "Onchain ",
      subtitle: "Home for Web3",
      id: "0",
      img: sideOnchain,
      imgStyle: "h-[300px] w-[300px]",
      content:
        "SIDE is a cutting-edge, low-cost, developer-friendly Cosmos SDK based blockchain built to be an open ecosystem that will bring the next billion users to web3",
    },
    {
      title: "Developer-",
      subtitle: "centric Ecosystem",
      id: "1",
      img: sideCentric,
      imgStyle: "h-[300px] w-[300px]",
      content:
        "An ecosystem built to empower innovation with result-driven incentives. Unleash your creativity and thrive in a seamless, rewarding blockchain environment",
    },
  ];
  const Block = {
    title: "Unrivaled Transaction Handling and  ",
    subtitle: "Scaling",
    id: "0",
    img: sideUnrivaled,
    imgStyle: "h-[300px] w-[780px]",
    content:
      "With unmatched scalability and single-block finality, the backbone of SIDE enables it to effortlessly cater to the transaction demands of the evolving Web3 landscape.",
  };
  return (
    <section className="px-12">
      {/*  */}
      <div className="grid grid-cols-2 gap-10">
        {BlockList.map((block, index) => {
          return (
            <div
              className="flex items-center justify-between border-2 rounded-2xl border-[#252932] px-9 py-4"
              key={index}
            >
              <div className="">
                <div className="font-bold text-[26px] mb-10">
                  {block.title}
                  <span className="text-[#ffffff80] ">{block.subtitle}</span>
                </div>
                <div className="w-[300px] text-[#848895] text-base">{block.content}</div>
              </div>
              <Image src={block.img} className={`${block.imgStyle}`} />
            </div>
          );
        })}
      </div>
      {/*  */}
      <div className=" mt-10 ">
        <div className="flex items-center justify-between border-2 rounded-2xl border-[#252932] px-9 py-4">
          <div className="">
            <div className="font-bold text-[26px] mb-10">
              {Block.title}
              <span className="text-[#ffffff80] "> {Block.subtitle}</span>
            </div>
            <div className="w-[600px] text-[#848895] text-base">{Block.content}</div>
          </div>
          <Image src={Block.img} className={`${Block.imgStyle}`} />
        </div>
      </div>
    </section>
  );
}
