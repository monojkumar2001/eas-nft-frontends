import React from "react";
import "../../Style/myCollection.css";
const TransferWallet = () => {
  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#transferModal"
        className="custom-btn w-100"
      >
        transfer
      </button>
      <div
        className="modal fade"
        id="transferModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wallet-connect-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="wallet-content-wrapper d-flex flex-column gap-3">
                <form action="">
                  <label htmlFor="" className="label-text">
                    Transfer Nft
                  </label>
                  <div className="wallet-input-fluid w-100">
                    <input
                      type="text"
                      className=" my-3 w-100"
                      placeholder="enter wallet address"
                    />
                  </div>
                  <label htmlFor="" className="label-texts mb-2">
                    <span>NFT owner Address: </span>
                    <span>0x0f831728e90B34359ba78c4a1df12Ea55324F399</span>
                  </label>
                  <label htmlFor="" className="label-texts">
                    <span> Token Id: </span>
                    <span>0x0f831728e90B34359ba78c4a1df12Ea55324F399</span>
                  </label>
                  <div className="conform-btn-item my-4 d-flex justify-content-center">
                    <button className="custom-btn">Conform Transfer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferWallet;
