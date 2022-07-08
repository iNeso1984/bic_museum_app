import React, {useState} from 'react'
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeIcon from '@mui/icons-material/Home'
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
   const [sidebar, setSidebar] = useState(false);
   window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("active", window.screenY>200)
   })
  return (
    <>
      <header className="header">
        <div className="container flex div">
          <div className="logo">Logo</div>
          {/* <img src= "/blacks_in_classics_app/src/assets/images/logo.jpg" alt="logo"/> */}
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                {" "}
                <Link to="/About">About</Link>
              </li>
              <li>
                {" "}
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                {" "}
                <Link to="/donate">Get Involved</Link>
              </li>
              <li className="icon">
                <SearchOutlinedIcon className="HeaderIcon" />
                <HomeIcon className="HeaderIcon" />
                <GridViewIcon className="HeaderIcon" />
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icons"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );

}
// to do: add sublink to get involved-->Donate

//How to use MUI---------------->
//mui fix: npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
// npm install @mui/icons-material --legacy-peer-deps
//import icons from: https://mui.com/material-ui/material-icons/?query=search&theme=Outlined
