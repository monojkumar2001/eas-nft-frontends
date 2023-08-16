import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const NFTDetailsPage = () => {
  const [tarits, setTarits] = useState(true);

  const handleTarits = () => {
    setTarits(!tarits);
  };
  return (
    <>
      <div className="nft-details">
        <div className="container">
          <div className="nft-details-wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="nft-details-img-item">
                  <div className="nft-img">
                    <LazyLoadImage src="/images/addressnfts/nft.png" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="nft-content-item">
                  <div className="nft-owner-item">
                    <h3>Egao #3608</h3>
                    <span>
                      Owned by <Link to="/">429B0B</Link>{" "}
                    </span>
                  </div>
                  <div className="nft-sale-item-con">
                    <div className="nft-dates d-flex align-items-center gap-2">
                      <span>
                        <BiTime />
                      </span>
                      <p>Sale ends 14 September 2023 at 2:16 pm </p>
                    </div>
                    <div className="nft-buy-item">
                      <div className="nft-current-price">
                        <span>Current Price</span>
                        <div className="d-flex align-items-end gap-2">
                          <h3>0.76 ETH</h3>
                          <span>$1,000</span>
                        </div>
                      </div>

                      <div className="nft-description-item">
                        <div
                          className={
                            tarits
                              ? "traits_item-con "
                              : " active traits_item-con"
                          }
                        >
                          <div
                            className="traits-item-btn d-flex align-items-center justify-content-between"
                            onClick={handleTarits}
                          >
                            <h5>Traits</h5>
                            <span>
                              <IoIosArrowUp />
                            </span>
                          </div>
                          <div className="nft-traits-item w-100">
                            <div className="row">
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="traits-item">
                                  <h5>ADDRESS TYPE</h5>
                                  <p>
                                    Residential <span>15%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="traits-item">
                                  <h5>CITY</h5>
                                  <p>
                                  London <span>15%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="traits-item">
                                  <h5>COUNTRY</h5>
                                  <p>
                                  United Kingdom <span>15%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="traits-item">
                                  <h5>POSTAL CODE</h5>
                                  <p>
                                  WC1V <span>15%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="traits-item">
                                  <h5>State</h5>
                                  <p>
                                   NY <span>15%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="traits-item">
                                  <h5>ADDRESS TYPE</h5>
                                  <p>
                                    Residential <span>15%</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nft-description-item">
                        <h3>Description</h3>
                        <div className="nft-disc-item">
                          <Link to={"/"}>By 67F230</Link>
                          <p>
                            Karafuru is home to 5,555 generative arts where
                            colors reign supreme. Leave the drab reality and
                            enter the world of Karafuru by Museum of Toys.
                          </p>
                        </div>
                      </div>
                      <div className="nft-buy-btn">
                        <Link to={"/"} className="custom-btn">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="nft-owner-wallet-item"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTDetailsPage;
