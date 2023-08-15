import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/layout/Footer";
import DashboardPage from "./Pages/DashboardPage";
import Header from "./components/layout/Header";
import Slug from "./components/KnowledgeBaseFaq/Slug";
import "./Style/global/global.css";
import "./Style/layout/Header.css";
import "./Style/layout/footer.css";
import { FaqData1,FaqData2,FaqData3,FaqData4,FaqData5,FaqData6 } from "./FaqData/FaqData";
import KnowledgeBaseFaq from "./Pages/KnowledgeBaseFaqPage";
import AddressNFTsPage from "./Pages/AddressNFTsPage";
import NFTUseCases from "./Pages/NFTUseCasesPage";
import NftPricingPage from "./Pages/NftPricingPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import NewsPage from "./Pages/NewsPage";

function App() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app-con">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element ={<HomePage/>}/>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/docs" element={<KnowledgeBaseFaq data1={FaqData1} data2={FaqData2} data3={FaqData3} data4={FaqData4} data5={FaqData5} data6={FaqData6}  />}/> 
          <Route path="/docs/:id"   element={<Slug data1={FaqData1} data2={FaqData2} data3={FaqData3} data4={FaqData4} data5={FaqData5} data6={FaqData6}  />}/> 
          <Route path="/address-nfts" element={<AddressNFTsPage/>}/>
          <Route path="/nft-use-cases" element={<NFTUseCases/>}/>
          <Route path="/nft-pricing" element={<NftPricingPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/login-register" element={<LoginRegisterPage/>}/>
          {/* <Route path="/news" element ={<NewsPage/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
