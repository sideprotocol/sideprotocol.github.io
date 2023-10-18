"use client";
import Image from "next/image";
import sideZk from "./img/side_zk.webp";
import sideZkLogo from "./img/side_zk_logo.svg";

export default function Zk() {
  return (
    <div>
      <div
        className="flex items-center justify-around px-10 my-40"
        style={{ borderBottom: "1px solid #363636" }}
      >
        <div className="">
          <Image src={sideZkLogo} className="mb-5" />
          <div className="text-[28px]">With unmatched scalability and</div>
          <div className="text-[28px]">single-blocke evolving </div>
          <div className="mt-12 cursor-pointer rounded-full inline-block bg-[#262626] text-[20px] px-10 py-5">
            Get Start
          </div>
        </div>
        <div>
          <Image src={sideZk} className="w-[520px] h-[320px]" />
        </div>
      </div>
    </div>
  );
}
