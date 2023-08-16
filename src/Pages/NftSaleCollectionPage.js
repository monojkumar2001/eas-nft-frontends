import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Style/myCollection.css";
import SingleNft from "../components/Collection/SingleNft";
const NftSaleCollectionPage = () => {
  const [activeNfts, setActiveNfts] = useState(1);
  const toggleNfts = (index) => {
    setActiveNfts(index);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const [NFTs, setNFTs] = useState([]);
  const [uniqueData, setUniqueData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [visibleCards, setVisibleCards] = useState(8);

  useEffect(() => {
    setFilteredData(uniqueData);
  }, [uniqueData]);

  useEffect(() => {
    setFilteredData(uniqueData.slice(0, visibleCards));
  }, [uniqueData, visibleCards]);

  const fetchData = async () => {
    try {
      const totalSupply = 50;
      let i;

      for (i = 1; i <= totalSupply; i++) {
        const url = `https://ipfs.io/ipfs/QmQQyTiUHzrH4NmUFpu3r9WbgVPVVVQ7NBhmveswMRHXhK/${i}.json`;
        const response = await axios.get(url);
        const result = response.data;
        setNFTs((prev) => [...prev, result]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    NFTs.forEach((nft) => {
      const data = [];
      const isDuplicate = uniqueData.some(
        (uniqueNft) =>
          uniqueNft.name === nft.name && uniqueNft.image === nft.image
      );
      if (!isDuplicate) {
        data.push(nft);
        setUniqueData((uniqueData) => [...uniqueData, ...data]);
      }
    });
  }, [NFTs]);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 8); // Increase the number of visible cards by 10
  };

  return (
    <>
      <div className="my-nfts-wrapper my-collection-page">
        <div className="container">
          <div className="dashboard-header-item d-flex align-items-center gap-3">
            <div className="dashboard-con-btn d-flex align-items-center gap-2">
              <button
                className={
                  activeNfts === 1
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(1);
                }}
              >
                ALL
              </button>
              <button
                className={
                  activeNfts === 2
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(2);
                }}
              >
                Charity
              </button>
              <button
                className={
                  activeNfts === 3
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(3);
                }}
              >
                Commercial
              </button>
              <button
                className={
                  activeNfts === 4
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(4);
                }}
              >
                Historic Landmarks
              </button>
              <button
                className={
                  activeNfts === 5
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(5);
                }}
              >
                Hospitals & Health Care
              </button>
              <button
                className={
                  activeNfts === 6
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(6);
                }}
              >
                Industrial
              </button>
              <button
                className={
                  activeNfts === 7
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(7);
                }}
              >
                Places of Worship
              </button>
              <button
                className={
                  activeNfts === 8
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(8);
                }}
              >
                Residential
              </button>
            </div>
            <button
              className="dashboard-refresh-btn collection-refresh-btn"
              onClick={refreshPage}
            >
              <img src="/images/dashboard/refresh.svg" alt="" />
            </button>
          </div>
          <div className="dashboard-card-item-wrapper">
            <div className="dashboard-card-items my-collection-items">
              <SingleNft uniqueData={filteredData} />
            </div>
            <div className="load-more-btn-con">
              {visibleCards < uniqueData.length && (
                <button
                  onClick={loadMoreCards}
                  className="load-more-btn custom-btn mt-4 d-flex align-items-center text-center justify-content-center"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftSaleCollectionPage;
