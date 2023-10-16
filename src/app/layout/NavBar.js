import Image from 'next/image';
import Link from 'next/link';
import sideLogo from './icon/side_logo.svg';

export default function NavBar() {
  return (
    <div className="flex items-center justify-center text-[#A1A1A1] relative h-[80px] space-x-[80px]">
      <Image src={sideLogo} alt="side" className="w-[120px] absolute left-[40px]" />
      <Link href="/" className="text-[#63A2FF]">
        Developers
      </Link>
      <Link href="/">Community</Link>
      <Link href="/">Explorer</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
