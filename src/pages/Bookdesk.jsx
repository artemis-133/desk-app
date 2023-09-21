import React, { useRef, useEffect, useState } from "react";

const Bookdesk = () => {
  const ref = useRef(null);
  const [data, setData] = useState([]);
  const [loginData, setLoginData] = useState({
    name: "Manik Garg",
    emp_id: "M26398",
  });

  const [arrival, setArrival] = useState(false);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/demo", {
        method: "GET",
      });
      const docs = await res.json();
      setData(docs);
      setArrival(true);
    }

    getData();
  }, []);

  useEffect(() => {
    console.log(data);

    data.forEach(function (doc) {
      document.querySelector(`[data-id='${doc.chair_id}']`).style.fill =
        "green";
    });

    const element = ref.current;

    async function putData(data) {
      const response = await fetch("http://localhost:8080/demo", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const confirm = await response.json();
      console.log(confirm);
    }

    const loggedIn = { name: loginData.name, emp_id: loginData.emp_id };

    if (arrival) {
      element.addEventListener("click", function (e) {
        console.log(e);
        console.log(data);
        if (e.target.classList.contains("chair")) {
          if (
            data.find(function (entry) {
              console.log(entry.emp_id);
              return entry.emp_id === loggedIn.emp_id;
            })
          ) {
            alert(
              "Sorry you can only book one seat on single day! You can delete today's entry and select another chair!"
            );
          } else {
            e.target.style.fill = "green";
            loggedIn["chair_id"] = e.target.dataset.id;
            loggedIn["date_created"] = new Date();
            loggedIn["for_date"] = new Date(loggedIn["date_created"]);
            loggedIn["for_date"].setDate(
              loggedIn["date_created"].getDate() + 1
            );
            loggedIn["for_date"].setHours(0, 0, 0, 0);
            data.push(loggedIn);

            putData(loggedIn);
          }
        }
      });
    }
  }, [arrival]);

  return (
    <div class="wrapper-svg">
      <div className="svg-container">
        <svg
          width="175mm"
          height="125mm"
          version="1.1"
          viewBox="0 0 175 125"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(70.8 -14.7)">
            <g fill="none" stroke="#000">
              <path
                d="m-68.8 66.5v-49.8h171v121h-64"
                stop-color="#000000"
                stroke-width="4.05"
              ></path>
              <path
                d="m-68.8 87.8v49.8h85.3"
                stop-color="#000000"
                stroke-width="4.05"
              ></path>
              <g stroke-width="1.9">
                <path d="m-68.8 52.3h21.3"></path>
                <path d="m-26.1 52.3h14.2v-35.6"></path>
                <path d="m-11.9 52.3h14.2v14.2"></path>
                <path d="m2.32 87.8v21.3h-28.4"></path>
                <path d="m-47.5 109h-21.3"></path>
                <path d="m2.32 109v28.4"></path>
                <path d="m2.32 52.3h14.2"></path>
                <path d="m37.9 52.3h14.2v-35.6"></path>
                <path d="m52.1 52.3v14.2"></path>
                <path d="m102 87.8h-14.2"></path>
                <path d="m66.3 87.8h-14.2v49.8"></path>
              </g>
            </g>
            <g fill-opacity="0">
              <rect x="-68.8" y="16.7" width="56.9" height="35.6"></rect>
              <rect x="-11.9" y="16.7" width="64" height="35.6"></rect>
              <rect x="52.1" y="16.7" width="49.8" height="71.1"></rect>
              <rect x="-68.8" y="52.3" width="71.1" height="56.9"></rect>
              <rect x="2.32" y="52.3" width="49.8" height="85.3"></rect>
              <rect x="52.1" y="87.8" width="49.8" height="49.8"></rect>
              <rect x="-68.8" y="109" width="71.1" height="28.4"></rect>
            </g>
          </g>
        </svg>
      </div>
      <div className="svg-container">
        <svg
          id="svg_draw"
          width="175mm"
          height="125mm"
          version="1.1"
          class="chairs_and_tables"
          xmlns="http://www.w3.org/2000/svg"
          ref={ref}
        >
          <circle class="chair" cx="232" cy="409" r="10" data-id="1"></circle>
          <circle class="chair" cx="593" cy="214" r="10" data-id="2"></circle>
          <circle class="chair" cx="169" cy="74" r="10" data-id="3"></circle>
          <circle class="chair" cx="62" cy="118" r="10" data-id="4"></circle>
          <circle class="chair" cx="503" cy="410" r="10" data-id="5"></circle>
          <circle class="chair" cx="609" cy="409" r="10" data-id="6"></circle>
          <circle class="chair" cx="406" cy="53" r="10" data-id="7"></circle>
          <circle class="chair" cx="594" cy="126" r="10" data-id="8"></circle>
          <circle class="chair" cx="276" cy="53" r="10" data-id="9"></circle>
          <g class="rectangle" transform="translate(176,18)">
            <rect width="40" height="114"></rect>
          </g>
          <g class="rectangle" transform="translate(15,96)">
            <rect width="43" height="43"></rect>
          </g>
          <g class="rectangle" transform="translate(158,286)">
            <rect width="100" height="60"></rect>
          </g>
          <g class="rectangle" transform="translate(599,87)">
            <rect width="46" height="161"></rect>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Bookdesk;
