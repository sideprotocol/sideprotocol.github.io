"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PageSelect() {
  const pageList = [
    {
      title: "Banner",
      position: "",
    },
    { title: "WordSIDE", position: "" },
  ];
  return (
    <ul
      className="fixed right-4  flex flex-col justify-center items-center"
      style={{ top: "calc(50% - 60px)" }}
    >
      {pageList.map((page, index) => {
        return (
          <li key={index} className="relative h-5">
            <span className="hidden text-sm font-bold absolute right-5 text-right top-1 w-[100px]">{page.title}</span>
            <div className="cursor-pointer w-2 h-2 mt-2 rounded-full bg-transparent border"></div>
          </li>
        );
      })}
    </ul>
  );
}

