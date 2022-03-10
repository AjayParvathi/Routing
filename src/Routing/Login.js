import React from "react";
import { Link } from "react-router-dom";


export const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 m-auto ">
            <div className="card bg-light mt-3">
              <div className="card-title text-center">
                <h2>LogIn</h2>
              </div>
              <div className="card-body w-7">
                <div className="form-group">
                  <input type="text" className="form-control" name="name"  placeholder="Username" />
                  </div>
                  <div className="form-group">
                  <input type="password" className="form-control" name="name" placeholder="Password" />
                  </div>
                  <div class="button my-2">
                  <button className="btn btn-primary btn-block" ><Link to="/" id="ref">LogIn</Link></button>
                  </div>
                  <Link to="/signup">I don't have an account!</Link> <Link to=" ">forgot password?</Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
