import React from "react";
import TicketNewModel from "./TicketNewModel";
import {FaSearch} from "react-icons/fa";

import TicketListItem from "./TicketListItem";
const Ticket = () => {
  return (
    <>
      <div className="content-eas-nft-wrapper">
        <div className="ticket-header-item d-flex align-items-center justify-content-between">
          <div className="ticket-header-left-item d-flex align-items-center gap-3">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Status:</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Any</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="ticket-create-new-item">
              <TicketNewModel />
            </div>
          </div>
          <div className="ticket-header-right-item">
            <div className="ticket-search-input-fluid">
              <button type="submit"><FaSearch/></button>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
        <div className="ticket-item-content mt-4">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Ticket ID</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Ticket Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <TicketListItem/>
                <TicketListItem/>
                <TicketListItem/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
