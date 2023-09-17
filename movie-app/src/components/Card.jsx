import React, { useState } from "react";
import cardPoster from "../assets/card-poster.jpg";
import imdb from "../assets/imdb.jpg";

const Card = ({ title, poster, release_date }) => {
  const [favourite, setFavourite] = useState(false);
  const handleFavourite = (e) => {
    e.stopPropagation();
    setFavourite(!favourite);
  };
  return (
    <article data-testid="movie-card" className="relative">
      <button
        onClick={handleFavourite}
        className="absolute right-4 top-4 z-20 p-[4px] rounded-full bg-grey"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
            fill={`${favourite ? "red" : "#D1D5DB"}`}
          />
        </svg>
      </button>
      <div className="pb-2">
        <img
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt=""
        />
      </div>
      <small
        data-testid="movie-release-date"
        className="font-[500] text-grey font-dmsans"
      >
        {release_date}
      </small>
      <h3
        data-testid="movie-title"
        className="text-[18px] font-[600] py-2 font-dmsans"
      >
        {title}
      </h3>
    </article>
  );
};

export default Card;
