import React, { useEffect, useState } from "react";
import arrow from "../assets/chevron-right.svg";
import axios from "../api/axios";
import Card from "./Card";
import { Link } from "react-router-dom";

const Featured = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchTopMovies = async () => {
    try {
      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTIzZWEyYTAxNjNhYTQxY2Q4MmRlMDBjMWE5YjAwMyIsInN1YiI6IjY0ZmYzNDRhMmRmZmQ4MDExZGYwOWM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iazze-Aiku2F_8PJbuo5EjJXr_edKV4XCrOKM2-QQlo",
        "Content-Type": "application/json",
      };
      const response = await axios.get("/3/movie/top_rated", { headers });
      let moviesData = response.data.results;
      setMovies(moviesData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log(movies);
    }
  };

  useEffect(() => {
    fetchTopMovies();
  }, []);

  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto py-16 ">
        <div className="flex items-center justify-between">
          <h1 className="font-dmsans font-[600] text-[24px]">Featured Movie</h1>
          <p className="flex items-center gap-4">
            <a className="text-rose font-dmsans" href="">
              See more
            </a>
            <span>
              <img src={arrow} alt="" />
            </span>
          </p>
        </div>
        <div className="mt-8">
          {loading ? (
            <></>
          ) : movies && movies.length === 0 ? (
            <>
              <p>No movies found</p>
            </>
          ) : (
            <div className="md:grid grid-cols-4 gap-8 mt-8 w-full">
              {movies &&
                movies.length > 0 &&
                movies.slice(0, 10).map((movie) => {
                  const { original_title, poster_path, release_date, id } =
                    movie;
                  return (
                    <Link key={id} to={`/movie/${id}`}>
                      <Card
                        title={original_title}
                        poster={poster_path}
                        release_date={release_date}
                      />
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
