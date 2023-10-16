import Image from 'next/image';
import sideBanner from './img/side_banner.webp';

export default function Banner() {
  return (
    <div>
      <Image src={sideBanner} className="w-full" alt="side" />
    </div>
  );
}
