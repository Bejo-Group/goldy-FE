import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Instagram from "../assets/ig.png";
import Facebook from "../assets/fb.png";
import Twitter from "../assets/tw.png";
import Youtube from "../assets/yt.png";

export default function Footer() {
  return (
    <footer className="bottom-0 flex justify-center items-center bg-darkgray w-full h-[271px] text-white mt-auto">
      <div className="grid grid-cols-3 gap-36">
        <div>
          <img
            className="h-[103px]"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-h-md">Information</h1>
          <div className="m-5 text-h-sm">
            <h3>About Us</h3>
            <h3>Contact</h3>
          </div>
          
        </div>
        <div>
          <h1 className="font-bold text-h-md text-center">Follow us</h1>
          <div className="grid grid-cols-4 gap-4 m-5">
            <img
              src={Instagram}
              alt="Instagram"
            />
            <img
              src={Facebook}
              alt="Facebook"
            />
            <img
              src={Twitter}
              alt="Twitter"
            />
            <img
              src={Youtube}
              alt="Youtube"
            />
          </div>
          
        </div>
      </div>
    </footer>
  );
}