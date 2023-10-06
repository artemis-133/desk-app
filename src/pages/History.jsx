import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const History = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = async function () {
    // if (token && token.user) {
    //   console.log("My name is Manik");
    // }
    if (token && token.user) {
      try {
        const res = await fetch("http://localhost:8080/history", {
          method: "POST",
          body: JSON.stringify({ id: token.user }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const answer = await res.json();
        if (answer["return"].localeCompare("NOT_FOUND") === 0) {
          console.log("Logged in user does not exist in database!");
          localStorage.removeItem("token");
          setToken(null);
          navigate("/");
        } else {
          setData(answer.data);
        }
      } catch (error) {
        alert("Server not responding!");
      }
    }
  };

  getData();

  // return <div>History</div>;
  return <div>{data}</div>;
};

export default History;
