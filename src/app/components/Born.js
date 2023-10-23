"use client";
import { useEffect } from "react";
import Image from "next/image";
import sideBorn from "./img/side_born.webp";
// import AOS from "aos";
export default function Born() {
  // useEffect(() => {
  //   AOS.init();
  // });

  return (
    <section className="">
      <Image src={sideBorn} className="w-full h-full absolute -z-10" alt="side"/>
      <div className="flex flex-col justify-center text-4xl font-semibold items-center h-full w-full">
        <div data-aos="fade-right">THE WEB3 TECHNOLOGY PROJECT</div>
        <div>BORN IN COSMOS</div>
      </div>
    </section>
  );
}
