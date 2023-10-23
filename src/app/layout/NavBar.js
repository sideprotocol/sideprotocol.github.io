"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sideLogo from "./icon/side_logo.svg";

export default function NavBar() {
  const linkList = [
    { title: "Developers", url: "/", id: "0" },
    { title: "Community", url: "/", id: "1" },
    { title: "Explorer", url: "/", id: "2" },
    { title: "About", url: "/about", id: "3" },
  ];
  const [tab, setTab] = useState("0");
  useEffect(() => {});
  return (
    <header
      data-aos="fade-down"
      data-aos-duration="2000"
      className="w-full h-[80px] z-50 fixed top-0 left-0 backdrop-blur-lg"
    >
      <div className="backdrop-blur-lg w-full h-full flex items-center justify-center text-[#A1A1A1] relative space-x-[80px]">
        <Image
          src={sideLogo}
          alt="side"
          className="w-[120px] absolute left-[40px]"
        />
        {linkList.map((linkItem, index) => {
          return (
            <Link
              key={index}
              href={linkItem.url}
              className={`${
                linkItem.id === tab ? "text-[#63A2FF] navbar-select" : ""
              }`}
              onClick={() => {
                setTab(linkItem.id);
              }}
            >
              {linkItem.title}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
