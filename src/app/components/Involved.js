
"use client";
import Image from "next/image";
import sideInvolved from "./img/side_involved.webp";

export default function Involved() {
  return <section className="">
     <Image src={sideInvolved} className='w-full h-full absolute -z-10' alt="side"/>
      <div className="flex flex-col justify-around text-4xl font-semibold items-center h-full w-full">
        <div className="text-white">Want to get involved?</div>
        <div className=" inline-block font-light rounded-lg text-sm text-black px-5 py-3 bg-white">
          Join the Community
        </div>
      </div>
  </section>;
}
