import React from "react";
import "./home.css";
import { useNavigate } from "react-router";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-center py-5  home-title">React Apps </h2>
      <div className="container">
        <div className="row">
        
          <div
            className="col-md-3 card-col"
            onClick={() => navigate("ecommerce")}
          >
            <img
              src="https://t3.ftcdn.net/jpg/03/87/15/90/360_F_387159010_YW8zctChFSxybHijrgWXmzpcCPk1wm5L.jpg"
              alt=""
              className="img-rounded"
            />
            <h6>E-commerce</h6>
          </div>
          <div
            className="col-md-3 card-col"
            onClick={() => navigate("weather")}
          >
            <img
              src="https://media.istockphoto.com/id/613878228/photo/weather-forecast-on-cell-phone.jpg?s=612x612&w=0&k=20&c=aUGLOnA9K_IJVG_gM3oXH786Ve5mTwiwFT86uLNo4fM="
              alt=""
              className="img-rounded"
            />
            <h6>Weather App</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
