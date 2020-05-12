import React from "react";
import "./Navbar.css";
import { ReactComponent as Icon } from "../assets/icons/home-icon.svg";

export default class Navbar extends React.Component {
  render() {
    return (
      <div class="container">
        <NavbarItem />
      </div>
    );
  }
}

class NavbarItem extends React.Component {
  render() {
    return (
      <button href="#" class="navbar-item-container">
        <div class="navbar-item-info">
          <span class="navbar-item-icon">
            <Icon />
          </span>
          <span class="navbar-item-text">Home</span>
        </div>
      </button>
    );
  }
}
