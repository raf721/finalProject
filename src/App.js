import React from 'react';
import './App.css';
import {Outlet, Link} from "react-router-dom";


// run "npm start" in terminal to see webpage

 function App() {
  return (
    <div className="App">
      <h1 style={{ color: "violet" }}>
        <b>forumerrorly</b>
      </h1>
      <p style={{ color: "pink" }}><i>Made by the best team in the world B)</i></p>

      {/* thread list below
      <ol>
        <li class="row">
          <a href="/item">
            <h3 class="title">First Thread</h3>
          </a>
        </li>
      </ol>
      */}

      <nav 
      style = {{
        color: "white",
        borderBottom: "solid 1px",
        paddingBottom:"1rem",
        font: "corsiva"
      }}
      >
        <li style={{display: 'inline-block'}}>
          <Link to = "/" style = {{
            color: "white",
            textDecoration: 'none',
            marginRight: '20px'
          }}>
            <b> Home </b>
          </Link>
        </li>
        <li style={{display: 'inline-block'}}>
          <Link to = "/Forum" style = {{
            color: "white",
            textDecoration: 'none',
            marginRight: '20px'
          }}>
            <b> Forum </b>
          </Link>
        </li>
        <li style={{display: 'inline-block'}}>
          <Link to = "/Post" style = {{
            color: "white",
            textDecoration: 'none',
            marginRight: '20px'
          }}>
            <b> Post </b>
          </Link>
        </li>
        <li style={{display: 'inline-block'}}>
          <Link to = "/Settings" style = {{
            color: "white",
            textDecoration: 'none',
            marginRight: '20px'
          }}>
            <b> Settings </b>
          </Link>
        </li>
      </nav>
      <Outlet />
    </div>
     
  )
}

export default App;