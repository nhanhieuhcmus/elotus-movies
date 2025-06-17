import { useState } from "react";
import type { Movie } from "../../types/Movie";
import { Link } from "react-router-dom";

import "./MovieCard.scss";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const path = movie.poster_path || movie.backdrop_path;
  const bg = `https://image.tmdb.org/t/p/w342${path}`;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">
        <img
            src={bg}
            alt={movie.title}
            className={`movie-img ${isLoaded ? "loaded" : ""}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy" 
          />
      </div>
      <h3>{movie.title}</h3>
    </Link>
  );
};

export default MovieCard;
