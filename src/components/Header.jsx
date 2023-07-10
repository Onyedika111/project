import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" className="w-60 h-15" />{" "}
          </a>

          <button className="btn btn-sm"><a href="#contact">Work with me</a></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
