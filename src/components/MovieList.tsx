import type { Movie } from '../types/Movie';
import MovieCard from './MovieCard/MovieCard';
import MovieCardV2 from './MovieCard/MovieCard';
import './MovieList.scss';

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCardV2 key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
