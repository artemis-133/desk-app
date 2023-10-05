import React, { useState } from "react";

import CommonSection from "../components/Commonsection";
import Helmet from "../components/Helmet";
import "../styles/history.css";

const History = () => {
  const [bookingHistory, setBookingHistory] = useState([
    {
      employeeName: "Siddharth Mishra",
      dateOfBooking: "2023-10-01",
      deskNumber: "Desk A1",
    },
    {
      employeeName: "Manik Garg",
      dateOfBooking: "2023-09-25",
      deskNumber: "Desk B3",
    },
    {
      employeeName: "Amit Sehgal",
      dateOfBooking: "2023-10-02",
      deskNumber: "Desk B13",
    },
    // Add more booking history entries here
  ]);
  return (
    <Helmet title="History">
      <CommonSection title="Booking History" />
      <section>
        <div className="history-container">
          <h1>Booking History</h1>
          <table className="history-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Date of Booking</th>
                <th>Desk Number</th>
              </tr>
            </thead>
            <tbody>
              {bookingHistory.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.employeeName}</td>
                  <td>{booking.dateOfBooking}</td>
                  <td>{booking.deskNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Helmet>
  );
};

export default History;
