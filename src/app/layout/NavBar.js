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
    <div
      className="flex items-center justify-center text-[#A1A1A1] relative h-[80px] space-x-[80px] z-50"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
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
  );
}
