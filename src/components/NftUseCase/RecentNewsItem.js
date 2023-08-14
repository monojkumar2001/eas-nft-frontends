import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
const RecentNewsItem = ({date, title, dis,imgs}) => {
  return (
    <>
      <div className="recent-new-slider-con recent-new-slider-con-2">
        <Link to={"/"}>
          <div className="recent-news-content">
            {/* <div className="recent-news-content-overlay"></div> */}
            <button className="alt-custom-btn">Press Releases</button>
            <div className="recent-item-content">
              <p>{date}</p>
              <h3>
               {title}
              </h3>
              <span>
               {dis}
              </span>
              <p className="read-more">
                Read More{" "}
                <span>
                  <FaChevronRight />
                </span>
              </p>
            </div>
          </div>
        </Link>
  <div className="recent-bg-img">
  <img src={imgs} alt="" />
  </div>
      </div>
    </>
  );
};

export default RecentNewsItem;
