"use client";
import { useEffect } from "react";
import AOS from "aos";

import Banner from "./components/Banner";
import WordSIDE from "./components/WordSIDE";
import Market from "./components/Market";
import Exchange from "./components/Exchange";
import Zk from "./components/Zk";
import Interchain from "./components/Interchain";
import Onchain from "./components/Onchain";
import Born from "./components/Born";
import Involved from "./components/Involved";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <main className="app">
      <Banner />
      <WordSIDE />
      <Market />
      <Exchange />
      <Zk />
      <Interchain />
      <Onchain />
      <Born />
      <Involved />
    </main>
  );
}
