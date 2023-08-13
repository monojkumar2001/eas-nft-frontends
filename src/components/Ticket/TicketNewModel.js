import React from "react";

const TicketNewModel = () => {
  return (
    <>
      <button
        type="button"
        className="create-ticket-btn custom-btn"
        data-bs-toggle="modal"
        data-bs-target="#create-ticket"
      >
        Create New Ticket
      </button>
      {/* <!-- Create Ticket Modal --> */}
      <div
        className="modal fade"
        id="create-ticket"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
              Open a New Ticket <span><img src="/images/dashboard/ticket-id.svg" alt="" /></span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ticket-model-content_item">
              <div className="ticket-model-input-fluid">
              <input type="text" placeholder="Order ID(Optional)" />
              </div>
              <div className="ticket-model-input-fluid">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Any</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              </div>
              <div className="ticket-model-input-fluid">
              <input type="text" placeholder="What can we help you with ?" />
              </div>
              <div className="ticket-model-input-fluid">
              <textarea name="" id="" cols="30" rows="4" placeholder="Message....."></textarea>
              </div>
              <div className="ticket-model-input-fluid">
                <label htmlFor="">Attachment (Optional)</label>
              <input type="file"/>
              </div>
              <button className="ticket-model-open-now-btn custom-btn">
             OPEN NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketNewModel;
