import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header_middle">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
          name=""
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_search" />
        </Link>
      </div>
      <div className="header_right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar alt="rohit" src="photo.jpg" />
      </div>
    </div>
  );
}
