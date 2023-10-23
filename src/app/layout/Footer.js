"use client";
import Image from "next/image";
import sidediscord from "../components/icon/side_foot_discord.svg";
import sidegitbook from "../components/icon/side_foot_gitbook.svg";
import sidegithub from "../components/icon/side_foot_github.svg";
import sidemedium from "../components/icon/side_foot_medium.svg";
import sidetwitter from "../components/icon/side_foot_twitter.svg";
import sidelogo from "../components/icon/side_foot_logo.svg";

export default function Footer() {
  return (
    <section className="">
      <div className="">
        <Image src={sidelogo} className="w-[160px]" alt="side" />
      </div>
      <div className="mt-16">
        <div className="text-sm font-light mb-3">Sign up for newsletter</div>
        <div className="w-[380px]">
          <form action="https://submit-form.com/bvras8Ee">
            <input
              type="email"
              placeholder="Enter your email"
              className="placeholder:text-[#ffffff66] text-white bg-[#03070E] border-white form-input rounded w-full"
              required
            />
          </form>
        </div>
      </div>
      <div className="flex my-8 gap-7">
        <a
          className="py-[10px] block"
          href="https://discord.com/invite/GN99earcFR"
          target="_blank"
        >
          <Image src={sidediscord} className="w-9" alt="side" />
        </a>
        <a
          className="py-[10px] block"
          href="https://twitter.com/SideProtocol"
          target="_blank"
        >
          <Image src={sidegitbook} className="w-9" alt="side" />
        </a>
        <a
          className="py-[10px] block"
          href="https://github.com/sideprotocol"
          target="_blank"
        >
          <Image src={sidegithub} className="w-9" alt="side" />
        </a>
        <a
          className="py-[10px] block"
          href="https://github.com/sideprotocol"
          target="_blank"
        >
          <Image src={sidemedium} className="w-9" alt="side" />
        </a>
        <a
          className="py-[10px] block"
          href="https://github.com/sideprotocol"
          target="_blank"
        >
          <Image src={sidetwitter} className="w-9" alt="side" />
        </a>
      </div>
      <div className="text-[#848895] font-light">
        © 2023 Side Labs All Rights Reserved
      </div>
    </section>
  );
}
