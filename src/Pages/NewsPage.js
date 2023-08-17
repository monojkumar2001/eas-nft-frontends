import React from "react";
import EasBanner from "../components/KnowledgeBaseFaq/EasBanner";
import "../Style/news.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
const NewsPage = () => {
  return (
    <>
      {/* ================== Knowledge Base Banner section =================== */}
      <EasBanner title="News & Press Releases" />
      {/*  =========================== News page =================*/}

      <div className="news-page cpy-6">
        <div className="container">
          <div className="news-header-section">
            <h2 className="sec-title">Latest News</h2>
            <p className="sec-des">
              Stay updated with the treasure trove of stellar content that
              inspires, informs, and entertains.
            </p>
          </div>
          <div className="news-container">
            {newsData.map((item, i) => {
              return (
                <div className="news-post" key={i}>
                  <div className="new-img">
                    <LazyLoadImage src="/images/addressnfts/nft.webp" />
                  </div>
                  <div className="news-about-content">
                    <Link to={`/news/${item.slug}`}>{item.title}</Link>
                    <div className="news-date d-flex align-items-center gap-2">
                      <span>{item.date}</span>
                      <span className="curcle-item"></span>
                      <span>{item.newsCreator}</span>
                    </div>
                    <p className="dis">{item.subDis}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;

const newsData = [
  {
    id: 1,
    title:
      "EAS Launches Platform to Map the World’s Addresses as NFT-based Digital Rights",
    slug:"EAS-Launches-Platformfdsfa",
    date:'Jone 5, 2023',
    newsCreator:"By LAURA",
    subDis:"Ethereum Address Service (“EAS”) is thrilled to announce the launch of its ground-breaking platform where the world’s addresses are being mapped as",
    
  },
];
