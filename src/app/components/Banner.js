import Image from 'next/image';
import sideBanner from './img/side_banner.webp';
import sidediscord from './icon/sidediscord.svg';
import sidegithub from './icon/sidegithub.svg';
import sidetwitter from './icon/sidetwitter.svg';

export default function Banner() {
  return (
    <div className="h-[calc(100vh-80px)] relative">
      <Image src={sideBanner} className="w-full absolute bottom-0 z-0" alt="side" />
      <div className="absolute right-[40px] mt-[30vh] z-20">
        <a className="py-[10px] block" href="https://discord.com/invite/GN99earcFR" target="_blank">
          <Image src={sidediscord} className="w-[30px]" alt="side" />
        </a>
        <a className="py-[10px] block" href="https://twitter.com/SideProtocol" target="_blank">
          <Image src={sidetwitter} className="w-[30px]" alt="side" />
        </a>
        <a className="py-[10px] block" href="https://github.com/sideprotocol" target="_blank">
          <Image src={sidegithub} className="w-[30px]" alt="side" />
        </a>
      </div>
      <div className="px-[48px] pt-[10vh] relative z-10">
        <h1 className="text-[60px] font-semibold mb-[20px]">
          The Exchange Layer of <span className="text-[#90BFFF]">Web3</span>
        </h1>
        <p className="font-light text-[24px] text-[#848895] mb-[4px]">
          Discover The Unexplored Side
        </p>
        <p className="font-light text-[24px] text-[#848895]">
          Enter the Web of Endless Opportunities and Unleash Limitless Potential
        </p>
      </div>
    </div>
  );
}
