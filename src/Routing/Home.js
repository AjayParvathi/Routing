import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6  my-3 text-center">
            <div className="image">
              <img src="images/logo.png"></img>
            </div>
            <div className="btn btn-success my-3">
              <button className="btn btn-success" id="btn">
                <Link to="/login" id="ref">
                  Let'S Start
                </Link>
              </button>
            </div>
          </div>
          <div className="col-sm-6  my-3">
            <h1 className="text-center">Get your First Job with us</h1>
            <div className="card pt-2 bg-light" id="card">
              <div className="card-title text-center">
                <h5>
                  <img src="images/checkbx.png" className="px-3" />
                  India's most visited jobs & Skill website
                </h5>
              </div>
            </div>
            <div className="card pt-2 my-3 bg-light " id="card">
              <div className="card-title text-center">
                <h5>
                  <img src="images/checkbx.png" className="px-3" /> 2 million
                  unique visitors every month
                </h5>
              </div>
            </div>
            <div className="card pt-2 my-3 bg-light " id="card">
              <div className="card-title text-center">
                <h5>
                  <img src="images/checkbx.png" className="px-3" />
                  Powered by AI and Machine Learning.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9  m-auto ">
            <div className="card mt-3" id="card1">
              <div className="card-body">
                <h5>
                  More than 30+ Companies will be hiring this month in
                  partnership with PrepInsta, get offcampus updates, follow us
                  on social media!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
