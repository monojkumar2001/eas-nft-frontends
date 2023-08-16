import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WalletConnet = () => {
  return (
    <>
      <button
        className="custom-btn"
        data-bs-toggle="modal"
        data-bs-target="#walletModal"
      >
        Connect wallet
      </button>
      {/* <!-- Wallet Modal --> */}
      <div
        className="modal fade"
        id="walletModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wallet-connect-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Connect to your favourite CryptoWallet
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="wallet-content-wrapper d-flex flex-column gap-3">
                <button className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center">
                  <div className="wallet-img">
                    <LazyLoadImage src="/images/header/metamask.png" />
                  </div>
                  <h4>Metamask</h4>
                  <span>Connect to your Metamask</span>
                </button>
                <button className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center">
                  <div className="wallet-img">
                    <LazyLoadImage src="/images/header/coinbase.png" />
                  </div>
                  <h4>Coinbase Wallet</h4>
                  <span>Connect to your Coinbase Wallet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletConnet;
