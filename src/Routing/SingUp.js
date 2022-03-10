import React from "react";
import { Link } from "react-router-dom";

export const SingUp = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 m-auto">
            <div className="card bg-light mt-3">
              <div className="card-title text-center">
                <h2>SignUp</h2>
              </div>
              <div className="card-body mx-2">
                <div className="from-group">
                  <label>First Name:</label>
                  <input type="text" className="form-control" id="sign" />
                </div>
                <div className="from-group mb-1">
                  <label>Last Name:</label>
                  <input type="text" className="form-control" id="sign" />
                </div>
                <div className="from-group">
                  <label>Mobile No:</label>
                  <input type="Number" className="form-control" id="sign" />
                </div>
                <div className="from-group">
                  <label>Email:</label>
                  <input type="text" className="form-control" id="sign" />
                </div>
                <div className="from-group">
                  <label>Password:</label>
                  <input type="password" className="form-control" id="sign" />
                </div>
                <div className="from-group">
                  <label>RenterPassword:</label>
                  <input type="password" className="form-control" id="sign" />
                </div>
                <div className="from-group pt-2 ">
                  <label>Select Gender:</label>
                 
                  <input
                    type="radio"
                    className="radio-inline mx-2"
                    name="radio1"
                    checked
                  />
                  Male
                  <input type="radio" name="radio1" className="radio-inline mx-2" />
                  Female
                </div>
                <div className="from-group my-2">
                  <input type="checkbox" />
                  Accept terms and conditions
                  <br />
                </div>

                <span>
                  <button className="btn btn-success"><Link to="/login" id="ref">SUBMIT</Link></button>
                </span>
            <Link to="/login">
                  <p>I have an account</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingUp;


