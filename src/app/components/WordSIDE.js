'use client';
import Image from 'next/image';

import sides from './img/side_s.webp';
import sidei from './img/side_i.webp';
import sided from './img/side_d.webp';
import sidee from './img/side_e.webp';

const WordItem = ({ title, subTitle, pic }) => {
  return (
    <div className="flex items-center w-[100vw]">
      <div className="flex-1">
        <Image src={pic} className="w-[500px] ml-[100px]" />
      </div>
      <div className="relative mr-[100px]">
        <div className="bg-[rgb(var(--foreground-rgb))] absolute left-0 w-[2px] z-20 top-[20px] bottom-[20px]" />
        <div className="bg-[rgb(var(--foreground-rgb))] absolute right-0 w-[2px] z-20 top-[20px] bottom-[20px]" />
        <div className="flex items-end border border-solid rounded-[12px] py-[80px] px-[60px]">
          <p className="font-semibold text-[308px] leading-[240px]">{title}</p>
          <p className="font-bold text-[52px] leading-none">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default function WordSIDE() {
  return (
    <div className="">
      <WordItem title="S" subTitle="calability" pic={sides} />
      <WordItem title="I" subTitle="nteroperability" pic={sidei} />
      <WordItem title="D" subTitle="ecentralization" pic={sided} />
      <WordItem title="E" subTitle="xchange" pic={sidee} />

      <div className="grid grid-cols-4 px-[40px]">
        {[
          {
            num: '-001',
            title: 'Scalability',
            desc: 'The system is meticulously crafted to ensure easy deployment – with seamless and permissionless chain integration and asset listing.',
          },
          {
            num: '-002',
            title: 'Interoperability',
            desc: `By leveraging light-client-based interoperable protocols like zkIBC and IBC, we foster seamless and secure communication between chains. Moreover, the potential integration of additional interoperable protocols could extend the ecosystem's reach to include all L1s and L2s.`,
          },
          {
            num: '-003',
            title: 'Decentralization',
            desc: `Empowering the distribution of liquidity in a decentralized manner, restoring asset sovereignty to users, all while maintaining a user-friendly experience.`,
          },
          {
            num: '-004',
            title: 'Exchange',
            desc: `A commitment to minimalism and specialization in decentralized asset exchange, focusing on doing one thing exceedingly well.`,
          },
        ]?.map((item, index) => (
          <div key={index} className="opacity-60">
            <p className="text-xs mb-[16px]">{item?.num}</p>
            <h3 className="font-bold text-lg mb-[10px]">{item?.title}</h3>
            <p className="text-sm font-light text-[#848895]">{item?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
