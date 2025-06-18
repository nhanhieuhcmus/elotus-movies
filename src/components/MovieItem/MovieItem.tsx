import type { Movie } from "../../types/Movie";
import { Link } from "react-router-dom";
import NoThumbPlaceholder from "../../assets/No-Image-Placeholder.svg";

import "./MovieItem.scss";

const MovieItem = ({ movie }: { movie: Movie }) => {
  const path = movie.poster_path || movie.backdrop_path;
  const imageUrl = path
    ? `https://image.tmdb.org/t/p/w185${path}`
    : NoThumbPlaceholder;

  return (
    <Link to={`/movie/${movie.id}`} className="movie-item">
      <img
        src={imageUrl}
        alt={movie.title}
        className="movie-item-thumb"
        loading="lazy"
      />
      <div className="movie-item-info">
        <div className="movie-item-header">
          <h3>{movie.title}</h3>
        </div>
        {movie.overview && <p>{movie.overview}</p>}
        
        <span className="movie-release-date">
          Release: {movie.release_date}
        </span>

        <div className="movie-vote-badge">
          Vote: {movie.vote_average.toFixed(1)} ⭐
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
