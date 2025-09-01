"use client";
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoinX"
        logoWidth={150}
        logoHeight={50}
        buttonText="Buy MemeCoin"
        onButtonClick={() => console.log('Button Clicked!')}
        className="sticky top-0 z-10"
      />
      <div id="hero" data-section="hero">
        <SplitHero
          title="Welcome to MemeCoinX"
          subtitle="Join the meme coin revolution in a playful way!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => { /* handle primary click */ }}
          onSecondaryButtonClick={() => { /* handle secondary click */ }}
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="What is MemeCoinX?"
          descriptions={[
            "MemeCoinX is a playful approach to cryptocurrency, leveraging the power of community and humor.",
            "With vibrant branding and a fun narrative, we make crypto approachable for everyone."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy MemeCoinX"
          steps={[
            { title: "Step 1", description: "Download the wallet app.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase crypto through exchange.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Swap your crypto for MemeCoinX!", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Explore our token distribution and usage."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000,000" },
            { id: 2, title: "Circulating Supply", description: "500,000,000" },
            { id: 3, title: "Market Cap", description: "$500,000" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoinX"
          logoText="MemeCoinX"
          className="footer"
          columns={[
            { title: "Links", items: [
              { label: "Home", onClick: () => {} },
              { label: "Tokenomics", onClick: () => {} },
              { label: "How to Buy", onClick: () => {} }
            ] },
            { title: "Support", items: [
              { label: "Contact", onClick: () => {} },
              { label: "FAQ", onClick: () => {} }
            ] }
          ]}
          copyrightText="© 2023 MemeCoinX. All rights reserved."
          onPrivacyClick={() => { /* handle privacy click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}
