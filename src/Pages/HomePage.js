import React from "react";
import Faq from "react-faq-component";
import HeroCardItems from "../components/Home/HeroCardItems";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NFTCollections from "../components/Home/NFTCollections";
import { Data } from "../FaqData/FaqQuestionData";
import "../Style/home.css";
import UseCaseCircle from "../components/Home/UseCaseCircle";
function HomePage() {
  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
  };

  return (
    <React.Fragment>
      {/* ======================= HERO =========================== */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="container">
          <div className="hero-wrapper">
            <span className="focus-color">Ethereum Address Service</span>
            <h1 className="hero-title">
              Mapping the World's Addresses as <span>NFT-based</span> Digital
              Rights
            </h1>
            <div className="address-input-fluid">
              <input
                type="text"
                placeholder="Enter a real-world address to mint as an NFT*"
              />
            </div>
            <div className="claim-my-nft-item">
              <button className="custom-btn">CLAIM MY NFT</button>
            </div>
          </div>
        </div>
        <div className="hero-bg-hover"></div>
      </section>

      {/* ======================= HERO CARD ====================== */}
      <HeroCardItems />

      {/* ====================== ABOUT US ========================== */}
      <section className="about_us cpb-6">
        <div className="container">
          <div className="about_us_wrapper row">
            <div className="about_us_left_site col-lg-7 col-md-12">
              <span className="focus-color">About us</span>
              <h1 className="section-title-2 mb-4">
                EAS is mapping the world’s addresses as tradable NFTs.
              </h1>
              <p>
                With Ethereum Address Service (EAS), NFT owners generate
                royalties from the gamification of digital address collecting
                and the monetization of address-related data. We envision a
                future where every real-world address and point of interest has
                an associated EAS NFT. EAS serves as the platform to monetize
                and manage these new digital address rights and drive price
                appreciation for NFT buyers.
              </p>
              <Link to={"/about"} className="custom-btn learn-more-btn mt-4">
                learn more
              </Link>
            </div>
            <div className="about_us_right_site col-lg-5 col-md-12">
              <LazyLoadImage src="/images/home/about-us-img.svg" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NFT COLLECTIONS ==================== */}
      <NFTCollections />
      {/* =====================  NFT USE CASES ==================== */}
      <section className="use-cases">
        <div className="container">
          <div className="use-cases-wrapper row d-flex align-items-center">
            <div className="use-cases-left-item col-lg-6 col-md-12">
              <span className="focus-color">NFT use Cases</span>
              <h1 className="section-title-2 mb-4">
                How Does My EAS NFT Make <span>Money?</span>
              </h1>
              <p>
                When many people hear “NFT” they may think of silly overpriced
                monkey doodles. But the reality is that the actual technological
                power of non-fungible tokens on the blockchain goes{" "}
                <span className="focus-color-2">
                  <Link to={""}>SO far beyond</Link>
                </span>{" "}
                just artwork alone.
              </p>
              <p>
                Since they’re recorded on the blockchain, NFTs are used to
                certify ownership and authenticity, and cannot be copied or
                substituted. EAS puts the real intended power of NFTs to use.
              </p>
              <div className="use-cases-item-list">
                <p>
                  EAS NFTs generate royalties and revenue from three primary use
                  cases:
                </p>
                <ul>
                  <li>Gaming & Mapping</li>
                  <li>Market Intelligence</li>
                  <li>Liquid Pricing Comparables</li>
                  <li>Real-World Data</li>
                </ul>
              </div>
            </div>
            <div className="use-cases-right-item col-lg-6 col-md-12">
          <UseCaseCircle/>
            </div>
          </div>
        </div>
      </section>
      {/* ========================= FAQ QUESTION  ================== */}
      <section className="faq-question cpt-6">
        <div className="container">
          <div className="faq-question-wrapper row d-flex align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="faq-question-content">
                <div className="faq-question-content-header">
                  <span className="focus-color">
                    FREQUENTLY ASKED QUESTIONS
                  </span>
                  <h1 className="section-title-2 mb-5">
                    Most Popular Questions
                  </h1>
                </div>
                <div>
                  <Faq data={Data} styles={styles} />
                </div>
                <div className="faq-still-question">
                  <p>
                    Still have questions? Visit our{" "}
                    <span>
                      <Link to={"/docs"}>Knowledge Base</Link>{" "}
                    </span>{" "}
                    for more answers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="faq-question-img">
                <LazyLoadImage src="/images/home/faq-question-img.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== EAS AFFILIATE ================== */}
      <section className="eas-affiliate cpy-6">
        <div className="container">
          <div className="eas-affiliate-wrapper row d-flex align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="eas-affiliate-content">
                <span className="focus-color">JOIN OUR COMMUNITY</span>
                <h2 className="section-title-2 mb-4">
                  Become an EAS Affiliate
                </h2>
                <p>
                  EAS is growing its NFT community through dedicated affiliates
                  interested in building virtual NFT neighborhoods.
                </p>
                <p>
                  Affiliates will receive a bonus of 0.0175 ETH on each NFT sale
                  and also qualify to own a neighborhood once they have built a
                  community of 100 NFTs.
                </p>
                <button className="coming-soon-btn custom-btn mt-4">
                  (COMING SOON)
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="eas-affiliate-img">
                <LazyLoadImage src="/images/home/affiliate-img.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HomePage;
