"use client";
import Image from "next/image";
import sideBorn from "./img/side_born.webp";

export default function Born() {
  return (
    <section className="">
      <Image src={sideBorn} className='w-full h-full absolute -z-10'/>
      <div className="flex flex-col justify-center text-4xl font-semibold items-center h-full w-full">
        <div>THE WEB3 TECHNOLOGY PROJECT</div>
        <div>BORN IN COSMOS</div>
      </div>
    </section>
  );
}
