import Banner from './components/Banner';
import WordS from './components/WordS';
import WordI from './components/WordI';
import WordD from './components/WordD';
import WordE from './components/WordE';
import Market from './components/Market';
import Exchange from './components/Exchange';
import Zk from './components/Zk';
import Interchain from './components/Interchain';
import Onchain from './components/Onchain';
import Born from './components/Born';
import Involved from './components/Involved';

export default function Home() {
  return (
    <main className="">
      <Banner />
      <div>
        <WordS />
        <WordI />
        <WordD />
        <WordE />
      </div>
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
