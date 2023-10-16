import Image from 'next/image';
import sides from './img/side_s.webp';
import sidei from './img/side_i.webp';
import sided from './img/side_d.webp';
import sidee from './img/side_e.webp';

const WordItem = ({ title, subTitle, pic }) => {
  return (
    <div className="flex items-center h-[100vh] w-[100vw]">
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
    <div className='flex items-center w-[400vw]'>
      <WordItem title="S" subTitle="calability" pic={sides} />
      <WordItem title="I" subTitle="nteroperability" pic={sidei} />
      <WordItem title="D" subTitle="ecentralization" pic={sided} />
      <WordItem title="E" subTitle="xchange" pic={sidee} />
    </div>
  );
}
