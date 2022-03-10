import React from 'react';
import { Link } from 'react-router-dom';

 const NavBar = () => {
  return (
      <div>
      <nav className="navbar navbar-expand-sm text-white bg-dark navbar-dark fixed">
            <Link className="navbar-brand" to="#">WELCOME</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ajju"> 
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="ajju">
            <ul className="navbar-nav">
            <li className="nav-item">
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className='nav-link'>login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className='nav-link'>signup</Link>
                </li>
                
            </ul>
            </div>
        </nav>
      </div>
  );
};
export default NavBar
