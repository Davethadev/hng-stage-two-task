import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import logo from "../assets/logo-black.svg";
import { useParams } from "react-router-dom";
import calendar from "../assets/calendar.svg";
import home from "../assets/home.svg";
import movie_projector from "../assets/movie-projector.svg";
import tv_show from "../assets/tv-show.svg";
import movie_poster from "../assets/movie-poster.jpg";
import star from "../assets/star.svg";
import two_tickets from "../assets/two-tickets.svg";
import list_white from "../assets/list-white.svg";
import best_movies from "../assets/best-movies.jpg";
import list from "../assets/list.svg";
import logout from "../assets/logout.svg";
import expand_arrow from "../assets/expand-arrow.svg";

const MovieDetails = () => {
  let { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});

  const fetchMovieDetails = async () => {
    try {
      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTIzZWEyYTAxNjNhYTQxY2Q4MmRlMDBjMWE5YjAwMyIsInN1YiI6IjY0ZmYzNDRhMmRmZmQ4MDExZGYwOWM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iazze-Aiku2F_8PJbuo5EjJXr_edKV4XCrOKM2-QQlo",
        "Content-Type": "application/json",
      };
      const response = await axios.get(`/3/movie/${id}`, { headers });
      let movieData = response.data;
      setMovieDetails(movieData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log(movieDetails);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <section className="flex">
      <div className="hidden md:block w-1/6 border-[1px] border-grey rounded-tr-3xl rounded-br-3xl">
        <div className="w-[80%] mx-auto pt-8">
          <img src={logo} alt="" />
        </div>
        <ul className="">
          <li className="flex items-center gap-4 pt-12 font-dmsans w-[60%] mx-auto">
            <span>
              <img src={home} alt="" />
            </span>
            Home
          </li>
          <li className="mt-12 w-full py-4 font-dmsans bg-pink border-r-rose border-r-8">
            <div className="w-[60%] mx-auto flex items-center gap-4">
              <span>
                <img src={movie_projector} alt="" />
              </span>
              Movies
            </div>
          </li>
          <li className="flex items-center gap-4 mt-12 font-dmsans w-[60%] mx-auto">
            <span>
              <img src={tv_show} alt="" />
            </span>
            TV Series
          </li>
          <li className="flex items-center gap-4 mt-12 font-dmsans w-[60%] mx-auto">
            <span>
              <img src={calendar} alt="" />
            </span>
            Upcoming
          </li>
          <article className="border-rose border-2 bg rounded mt-12 p-4 w-[70%] mx-auto rounded-xl">
            <p className="text-[14px] font-[500] font-dmsans">
              Play movie quizes and earn free tickets
            </p>
            <small className="text-[12px] leading-0 font-dmsans">
              50k people are playing now
            </small>
            <button className="text-[12px] bg-pink text-rose font-dmsans font-[500] rounded-xl px-4 py-1 mt-2">
              Start playing
            </button>
          </article>
          <li className="flex items-center gap-4 mt-12 font-dmsans w-[60%] mx-auto">
            <span>
              <img src={logout} alt="" />
            </span>
            Logout
          </li>
        </ul>
      </div>
      <div className="w-5/6 px-2 md:px-8 pt-8">
        <iframe
          // width="560"
          height="315"
          src="https://youtu.be/fB_8VCwXydM?si=ObAx1hNTYuTaut4P"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div className="md:flex items-center justify-between py-8">
          <p
            data-testid="movie-title"
            className="font-dmsans font-[500] md:flex items-center gap-2"
          >
            {movieDetails.original_title} •{" "}
            <span data-testid="movie-release-date">
              {!loading &&
                new Date(`${movieDetails.release_date.slice(0, 4)}T00:00:00`)
                  .toUTCString()
                  .slice(0, 16)}
            </span>
            • PG-13 •{" "}
            <span data-testid="movie-runtime">{movieDetails.runtime}m</span>
            <span className="font-dmsans border-[1px] px-2 border-grey rounded-xl text-red-500 text-[12px]">
              Action
            </span>
            <span className="font-dmsans border-[1px] px-2 border-grey rounded-xl text-red-500 text-[12px]">
              Drama
            </span>
          </p>
          <div className="flex items-center gap-2">
            <span>
              <img src={star} alt="" />
            </span>
            <span className="font-dmsans flex items-center gap-2">
              <span className="text-grey">8.5</span> |
              <span className="text-[14px] font-[500]">350k</span>
            </span>
          </div>
        </div>
        <div className="md:flex justify-between w-full">
          <div className="">
            <div className="w-full">
              <p
                data-testid="movie-overview"
                className="font-dmsans w-full md:w-[80%]"
              >
                {movieDetails.overview}
              </p>
              <div className="mt-8">
                <p className="md:flex items-center gap-2 font-dmsans font-[500]">
                  Director:
                  <span className="text-rose font-[400]">Joseph Kosinski</span>
                </p>
                <p className="md:flex items-center gap-2 font-dmsans my-8">
                  Writers:
                  <span className="text-rose font-[400]">
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </span>
                </p>
                <p className="md:flex items-center gap-2 font-dmsans">
                  Stars :
                  <span className="text-rose font-[400]">
                    Tom Cruise, Jennifer Connelly, Miles Teller{" "}
                  </span>
                </p>
              </div>
              <div className="border-[1px] border-grey rounded-lg flex items-center mt-8 w-full md:w-[80%]">
                <span className="bg-rose rounded w-[214px] h-full md:h-[30px] py-2 flex justify-center items-center text-white font-dmsans font-[500] text-[14px]">
                  Top rated movie #65
                </span>
                <div className="px-4 flex justify-between items-center w-full">
                  <span className="font-dmsans text-[14px]">
                    Awards 9 nominations
                  </span>
                  <span>
                    <img src={expand_arrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button className="flex bg-rose rounded h-[55px] w-full md:w-[360px] text-white flex justify-center items-center gap-4 font-dmsans font-[500] text-[14px]">
              <span>
                <img src={two_tickets} alt="" />
              </span>
              See Showtimes
            </button>
            <button className="flex bg-pink rounded h-[55px] w-full md:w-[360px] mt-2 flex justify-center items-center gap-4 border-[1px] border-rose font-dmsans font-[500] text-[14px]">
              <span>
                <img src={list} alt="" />
              </span>
              More watch options
            </button>
            <div className="relative mt-8 w-full md:w-[360px]">
              <div>
                <img src={best_movies} alt="" />
              </div>
              <small className="absolute bottom-0 right-0 left-0 bg-lightblack text-white font-dmsans flex justify-center items-center gap-2 w-[100%]">
                <span>
                  <img src={list_white} alt="" />
                </span>
                The Best Movies and Shows in September
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
