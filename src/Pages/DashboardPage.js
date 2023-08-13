import React, { useState} from "react";
import "../Style/dashboard.css";
import "../Style/ticket.css"
import MyNfts from "../components/Dashboard/MyNfts";
import AccountDetails from "../components/Dashboard/AccountDetails";
import ContactUs from "../components/Dashboard/ContactUs";
import ClaimNewNfts from "../components/Dashboard/ClaimNewNfts";
import Referral from "../components/Dashboard/Referral";
import Ticket from "../components/Ticket/Ticket";
import TicketMessages from "../components/Ticket/TicketMessages";
import { Link ,Outlet } from "react-router-dom";
const DashboardPage = () => {
  const [filterActive, setFilterActive] = useState([false]);
  const toggleFilterMenu = () => {
    setFilterActive(!filterActive);
  };

  const [activeFilter, SetActiveFilter] = useState(2);
  const toggleFilter = (index) => {
    SetActiveFilter(index);
  };

  return (
    <>
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className={`${filterActive ? "" : "active"} sidebar-filter`}>
                <div className="filter-close-menu" onClick={toggleFilterMenu}>
                  <img src="./images/dashboard/close.svg" alt="" />
                </div>
                <div className="dashboard-sideber-wrapper">
                  <div className="filter-items">
                    <div className="filter-list-items">
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 1
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(1);
                          }}
                        >

                          <div 
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/account.svg" alt="" />
                            </div>
                            <span>Account Details</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 2
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(2);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/my-nft.svg" alt="" />
                            </div>
                            <span>My NFTs</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 3
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(3);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/messages.svg" alt="" />
                            </div>
                            <span>Messages</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 4
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(4);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/claim.svg" alt="" />
                            </div>
                            <span>Claim New NFTs</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 5
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(5);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img
                                src="/images/dashboard/referral.svg"
                                alt=""
                              />
                            </div>
                            <span>My Referrals</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div className="filter-item-bar">
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <Link to={"/docs"}>
                              <div className="filter-type d-flex gap-2 align-items-center">
                                <img
                                  src="/images/dashboard/knowledge.svg"
                                  alt=""
                                />
                                <span>Knowledge Base</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 6
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(6);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/contact.svg" alt="" />
                            </div>
                            <span>Contact Us</span>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <div
                          className={
                            activeFilter === 7
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(7);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/ticket.svg" alt="" />
                            </div>
                            <span>Ticket</span>
                          </div>
                        </div>
                      </div>

                      <div className="filter-list-item">
                        <div
                          className="filter-item-bar"
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/logout.svg" alt="" />
                            </div>
                            <span>Logout</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 ">
              <div className={`${filterActive ? "" : "active"} overlays`}></div>
              <div className="dashboard-wrapper">
                <div className="filter-menu-item-con">
                  <button
                    className="filter-menu-icon"
                    onClick={toggleFilterMenu}
                  >
                    <img src="/images/dashboard/filter-menu.svg" alt="" />
                  </button>
                </div>
                <div className="dashboard-content-item">
                  <div
                    className={
                      activeFilter === 1
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <AccountDetails />
                  </div>

                  <div
                    className={
                      activeFilter === 2
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <MyNfts />
                  </div>
                  <div
                    className={
                      activeFilter === 3
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <TicketMessages/>
                  </div>
                  <div
                    className={
                      activeFilter === 4
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <ClaimNewNfts />
                  </div>
                  <div
                    className={
                      activeFilter === 5
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <Referral />
                  </div>                  
                  <div
                    className={
                      activeFilter === 6
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <ContactUs />
                  </div>
                  <div
                    className={
                      activeFilter === 7
                        ? "filter-list-item-ber active"
                        : "filter-list-item-ber"
                    }
                  >
                    <Ticket/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default DashboardPage;
