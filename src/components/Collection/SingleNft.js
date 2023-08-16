

import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { convertIpfsAddress } from "../../utils";
import { Link } from "react-router-dom";
const SingleNft = ({ uniqueData }) => {
  const [nftInfo, setNftInfo] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const NFTsData = async (id) => {
    try {
      const url = `https://ipfs.io/ipfs/QmQQyTiUHzrH4NmUFpu3r9WbgVPVVVQ7NBhmveswMRHXhK/${id}.json`;
      const response = await axios.get(url);
      const result = response.data;
      setNftInfo(result);
      const attributes = result.attributes;

      const data = await Promise.all(
        attributes.map((nft) => ({
          trait_type: nft.trait_type,
          value: nft.value,
        }))
      );
      setFilterData(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {uniqueData.map((item) => {
        return (
          <>
            <Link
              className="images-card d-flex align-items-center justify-content-center flex-column"
              key={item.edition}
              onClick={() => {
                NFTsData(item.edition);
              }}
              to={'/nft-details'}
            >
              <div className="nft-img">
                {/* <img src={convertIpfsAddress(item.image)} alt="" /> */}
                <img src="/images/addressnfts/nft.png" alt="" />
              </div>
              <div className="nft-titles">
                <p>FOUR SEASONS HOTEL DOWNTOWN 27 BARCLAY ST NEW YORK, NY 10007 USA</p>
                {/* <span>NO. {item.edition}</span> */}
                <Link to='/' className="buy-nft-btn custom-btn">Buy NFT</Link>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default SingleNft;
