import React from "react";
import facebook from "../assets/fa-brands_facebook-square.png";
import instagram from "../assets/fa-brands_instagram.png";
import twitter from "../assets/fa-brands_twitter.png";
import youtube from "../assets/fa-brands_youtube.png";

const Footer = () => {
  return (
    <footer className="py-16">
      <ul className="flex justify-center gap-12">
        <li>
          <a href="">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={youtube} alt="" />
          </a>
        </li>
      </ul>
      <ul className="flex flex-col md:flex-row justify-center gap-2 text-center md:gap-12 py-8">
        <li className="font-dmsans font-[500]">
          <a href="">Conditions of Use</a>
        </li>
        <li className="font-dmsans font-[500]">
          <a href="">Privacy & Policy</a>
        </li>
        <li className="font-dmsans font-[500]">
          <a href="">Press Room</a>
        </li>
      </ul>
      <p className="font-dmsans font-[500] text-grey text-center">
        © 2021 MovieBox by Adriana Eka Prayudha{" "}
      </p>
    </footer>
  );
};

export default Footer;
