import Image from 'next/image';
import sideLogo from './icon/side_logo.svg';

export default function NavBar() {
  return (
    <div className="flex items-center justify-center text-[#A1A1A1] relative h-[80px] space-x-[80px]">
      <Image src={sideLogo} alt="side" className="w-[120px] absolute left-[40px]" />
      <a href="/" className="text-[#63A2FF]">
        Developers
      </a>
      <a href="/">Community</a>
      <a href="/">Explorer</a>
      <a href="/about">About</a>
    </div>
  );
}
