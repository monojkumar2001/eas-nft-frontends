import React from "react";
import { Link } from "react-router-dom";

const TicketListItem = () => {
  return (
    <>
      <tr>
        <td>
          <div className="ticket-id-item d-flex align-items-center gap-2">
            <img src="/images/dashboard/ticket-id.svg" alt="" />
            <span>#SP_C5AE4</span>
          </div>
        </td>
        <td>Order Issue - Cancel Order</td>
        <td>
          <Link to={"/"} className="ticket-pending-btn">
            Pending
          </Link>
        </td>
        <td>
          <Link to={"/"} className="ticket-view-btn">
            View
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TicketListItem;
