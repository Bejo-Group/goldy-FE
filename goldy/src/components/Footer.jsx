import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Instagram from "../assets/ig.png";
import Facebook from "../assets/fb.png";
import Twitter from "../assets/tw.png";
import Youtube from "../assets/yt.png";

export default function Footer() {
  return (
    <footer className="bg-darkgray w-full h-[271px] text-white">
      <div className="flex justify-center items-center grid grid-cols-3 gap-4">
        <div>
          <img
            className="h-12 w-15"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div>
          <h1>Information</h1>
          <h3>About Us</h3>
          <h3>Contact</h3>
        </div>
        <div>
          <h1>Follow us</h1>
          <div className="grid grid-cols-4 gap-4">
            <img
              className="h-15 w-15"
              src={Instagram}
              alt="Instagram"
            />
            <img
              className="h-15 w-15"
              src={Facebook}
              alt="Facebook"
            />
            <img
              className="h-15 w-15"
              src={Twitter}
              alt="Twitter"
            />
            <img
              className="h-15 w-15"
              src={Youtube}
              alt="Youtube"
            />
          </div>
          
        </div>
      </div>
    </footer>
  );
}