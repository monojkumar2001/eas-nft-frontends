import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import SocialMediaLinkItem from "../SocialMediaLink/SocialMediaLinkItem";
// import NftPricingPage from "../../Pages/NftPricingPage";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper row ">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item-fluid footer-items-content d-flex text-center algin-items-center justify-content-center flex-column">
                <Link to={"/"}>
                  <LazyLoadImage src="/images/footer/footer-logo.svg" />
                </Link>
                <p>
                  The only platform mapping the worlds addresses as tradable
                  NFTs
                </p>
                <div className="footer-opensea">
                  <Link
                    to={
                      "https://opensea.io/collection/ethereum-address-service"
                    }
                    target="_blank"
                  >
                    <img src="/images/footer/opensea.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item-fluid">
                <div className="footer-link-item">
                  <Link to={"/"}>Browse Marketplace</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/address-nfts"}>Address NFTs</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/"}>Neighborhood NFTs</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/"}>Charity NFTs</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/nft-pricing"}>Pricing</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/nft-use-cases"}>Use Cases</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item-fluid">
                <div className="footer-link-item">
                  <Link to={"/about"}>About</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/contact"}>Contact</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/"}>News</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/docs"}>FAQ & Support</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/"}>Careers</Link>
                </div>
                <div className="footer-link-item">
                  <Link to={"/dashboard"}>Account</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item-fluid footer-items-content">
                <SocialMediaLinkItem />
                <p>Be the first to know about special announcements:</p>

                <div className="footer-email-fluid mt-4">
                  <input type="email" placeholder="Email*" />
                </div>
                <div className="footer-email-submit-btn">
                  <button type="submit">I want in!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy-right-wrapper mt-5">
          <div className="footer-terms-policy" >
            <Link to={"/"}>Privacy Policy</Link>
            <Link to={"/"}>Terms & Conditions</Link>
          </div>
          <p className="copy-text">
            Copyright © 2023 Ethereum Address Service (EAS). All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
