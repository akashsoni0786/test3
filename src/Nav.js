import React from "react";
import "./Nav.css";
import { connect } from "react-redux";
import { mapstatetodispatch, mapstatetoprops } from "./redux/Mapping";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="leftdiv">
        <img
          className="logoimg"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/2367/2367788.png"
        />

        <p>ChriShop</p>
      </div>
      <div className="rightdiv">
        <img
          className="cartimg"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
        />
        <p>({props.cart_product.length})</p>
      </div>
    </div>
  );
};

export default connect(mapstatetoprops, mapstatetodispatch)(Navbar);
