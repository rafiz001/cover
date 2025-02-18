import React from 'react';
import { Link } from 'react-router';

function Nav(props) {
    return (
        <>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Cover Page</a>
  </div>
  <div className="flex-none">
  <div className="dropdown ">
  <div tabIndex={0} role="button" className="btn m-1">
    Theme
    <svg
      width="12px"
      height="12px"
      className="inline-block h-2 w-2 fill-current opacity-60"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Default"
        value="default" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Dark"
        value="dark" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label="Light"
        value="light" />
    </li>
    
  </ul>
</div>
  
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Link</a></li> */}
      <li>
        <details>
          <summary>Type</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/labreport">Lab Report</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div> 
        </>
    );
}

export default Nav;