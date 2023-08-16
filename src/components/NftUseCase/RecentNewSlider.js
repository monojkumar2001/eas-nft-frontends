import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Pagination, A11y } from "swiper/modules";
import RecentNewsItem from "./RecentNewsItem";
const RecentNewSlider = () => {
  return (
    <>
      <section className="recent_news_press cpy-6">
        <div className="recent_news-overlay"></div>
        <div className="recent_new_header cpb-7">
          <span className="focus-color">What's Going on?</span>
          <h4 className="recent-title">Recent News & Press Releases</h4>
        </div>
        <div className="recent-news-press-content">
          <div className="recent-news-wrapper">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, A11y]}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                680: {
                  slidesPerView: 1.5,
                },
                1050: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <RecentNewsItem
                  date="JUNE 5, 2023"
                  title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
                  dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
                  imgs="/images/use-cases/slider-1.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <RecentNewsItem
                  date="JUNE 5, 2023"
                  title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
                  dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
                  imgs="/images/use-cases/slider-2.avif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <RecentNewsItem
                  date="JUNE 5, 2023"
                  title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
                  dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
                  imgs="/images/use-cases/slider-3.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <RecentNewsItem
                  date="JUNE 5, 2023"
                  title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
                  dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
                  imgs="/images/use-cases/slider-4.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <RecentNewsItem
                  date="JUNE 5, 2023"
                  title="EAS Launches Platform to Map the World’s Addresses as
             NFT-based Digital Rights"
                  dis=" Ethereum Address Service (“EAS”) is thrilled to announce
             the launch of its ground-breaking platform..."
                  imgs="/images/use-cases/slider-5.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentNewSlider;
