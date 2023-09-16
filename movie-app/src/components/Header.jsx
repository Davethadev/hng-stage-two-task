import React from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import menu from "../assets/menu.svg";
import imdb from "../assets/imdb.jpg";
import tomatoe from "../assets/tomatoe.png";
import play from "../assets/play.svg";

const Header = () => {
  return (
    <section className="header h-[600px] w-full">
      <header className="w-[80%] mx-auto">
        <nav className="flex items-center justify-between py-4">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to watch?"
              className="hidden md:block bg-transparent border-2 border-white text-white rounded w-[525px] h-[36px] indent-[10px] outline:none font-dmsans"
            />
            <span className="absolute left-[500px] top-[10px]">
              <img src={search} alt="" />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a className="font-dmsans text-white" href="">
              Sign in
            </a>
            <button>
              <img src={menu} alt="" />
            </button>
          </div>
        </nav>
        <section className="pt-16">
          <h1 className="text-[48px] text-white leading-[58px] font-dmsans font-[600]">
            John Wick 3 : <br />
            Parabellum
          </h1>
          <div className="flex items-center gap-8 pt-4">
            <p className="flex items-center gap-2 text-white font-dmsans">
              <span>
                <img src={imdb} alt="" />
              </span>
              86.0 / 100
            </p>
            <p className="flex items-center gap-2 text-white font-dmsans">
              <span>
                <img src={tomatoe} alt="" />
              </span>
              97%
            </p>
          </div>
          <p className="text-white py-4 font-dmsans md:w-[40%]">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="font-dmsans uppercase text-white bg-rose flex items-center gap-2 w-[169px] h-[36px] rounded flex justify-center">
            <span>
              <img src={play} alt="" />
            </span>
            Watch trailer
          </button>
        </section>
      </header>
    </section>
  );
};

export default Header;
