import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";

class Navbar extends Component {
  state = { Clicked: false };
  handleClick = () => {
    this.setState({ Clicked: !this.state.Clicked });
  };
  render() {
    return (
      <nav className="nav-items">
        <h1 className="logo">Trippy</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.Clicked ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={this.state.Clicked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="nav-link">
                <a className={item.cName} href="/">
                  <i className={item.icon} />
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
