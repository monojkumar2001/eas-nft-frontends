
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Style/myCollection.css";
import MySingleNft from "../components/Collection/MySingleNft";
const MyCollectionPage = () => {
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
        <div className="dashboard-card-item-wrapper">
        <div className="dashboard-card-items my-collection-items">
              <MySingleNft uniqueData={filteredData} />
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

export default MyCollectionPage;
