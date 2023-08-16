import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import WalletConnet from "../Collection/WalletConnet";
function Header() {
  const [isSticky, setSticky] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  const [activeDropdown, setActiveDropdown] = useState(0);
  const toggleActiveDrop = (index) => {
    setActiveDropdown(index);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <!-- =====================Navigation=========== -->
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header-wrapper">
        <nav className="navigation">
          <div className="logo logo-nav">
            <Link to="/" className="logo-link">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <img src="./images/close.svg" alt="" />
            </div>
            <ul className="menu-nav-ul">
              <div className="mb-logo">
                <Link to="/" className="logo-link">
                  <img src="/images/logo.png" alt="" className="logo-img" />
                </Link>
              </div>
              <div className="left-side d-flex algin-items-center">
                <li className="nav-list">
                  <HashLink
                    to="/"
                    className="nav-link home-icons"
                    onClick={_toggleSidebar}
                  >
                    <span>
                      <img src="/images/header/home-icon.svg" alt="" />
                    </span>
                  </HashLink>
                </li>
                <li
                  className={
                    activeDropdown === 1 ? "nav-list active" : "nav-list"
                  }
                  onClick={() => {
                    if (activeDropdown === 1) {
                      toggleActiveDrop(0);
                    } else toggleActiveDrop(1);
                  }}
                >
                  <Link to="#">NFT Collections</Link>
                  <div className="dp-menu">
                    <ul className="dp-menu-ul">
                      <li onClick={_toggleSidebar}>
                        <Link to={"/address-nfts"}>Address NFTs</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/nft-collection"}>NFT Collection</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/my-nft-list"}>My NFT List</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/sale-nft"}>Sale Nft</Link>
                      </li>

                    </ul>
                  </div>
                </li>
                <li
                  className={
                    activeDropdown === 2 ? "nav-list active" : "nav-list"
                  }
                  onClick={() => {
                    if (activeDropdown === 2) {
                      toggleActiveDrop(0);
                    } else toggleActiveDrop(2);
                  }}
                >
                  <Link to="#">Resources</Link>
                  <div className="dp-menu">
                    <ul className="dp-menu-ul">
                      <li onClick={_toggleSidebar}>
                        <Link to={"/nft-use-cases"}>NFT Use Cases</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/nft-pricing"}>NFT Pricing</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/docs"}>Knowledge Base & FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={
                    activeDropdown === 3 ? "nav-list active" : "nav-list"
                  }
                  onClick={() => {
                    if (activeDropdown === 3) {
                      toggleActiveDrop(0);
                    } else toggleActiveDrop(3);
                  }}
                >
                  <Link to="#">About</Link>
                  <div className="dp-menu">
                    <ul className="dp-menu-ul">
                      <li onClick={_toggleSidebar}>
                        <Link to={"/about"}>Our Mission</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/contact"}>Contact</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={""}>Careers</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-list" onClick={_toggleSidebar}>
                  <Link to="/news" className="nav-link">
                    News
                  </Link>
                </li>
                <li
                  className={
                    activeDropdown === 4 ? "nav-list active" : "nav-list"
                  }
                  onClick={() => {
                    if (activeDropdown === 4) {
                      toggleActiveDrop(0);
                    } else toggleActiveDrop(4);
                  }}
                >
                  <Link to="#">My Account</Link>
                  <div className="dp-menu">
                    <ul className="dp-menu-ul">
                      <li onClick={_toggleSidebar}>
                        <Link to={"/login-register"}>Login/Register</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/dashboard"}>Account Dashboard</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/dashboard"}>My NFTs</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/dashboard"}>Claim NFTs</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link to={"/"}>Refer & Earn (Coming Soon)</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </div>

              <div className="left-side d-flex algin-items-center">
              <WalletConnet/>
              </div>
            </ul>
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <img src="/images/menu.svg" alt="" />
          </div>
        </nav>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
