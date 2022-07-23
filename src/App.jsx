import { useState } from "react";
import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs.
        Start Selling & Growing"
        description="Buy, store, collect NFTS,
        exchange & earn crypto. Join 25+
        million people using ProNef Marketplace. "
        showBtn
        mockupImg={assets.homeHero}
        banner={"banner"}
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef Marketplace. Smooth constant colors of a fluent UI Design. "
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built  using Expo which runs natively on all users devices. You can easily get your app into people`s hands "
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of specific NFT. "
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />
    </>
  );
}

export default App;
