import type { Movie } from "../../types/Movie";
import "./MovieGrid.scss";

import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../MovieCardSkeleton/MovieCardSkeleton";


type MovieGridProps = {
  movies: Movie[];
  loading: boolean;
}
export default function MovieGrid(props: MovieGridProps) {
  return (
    <>
      <div className="movie-grid">
        {props.loading
        ? Array.from({ length: 20 }).map((_, i) => <MovieCardSkeleton key={i} />)
        : props.movies.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </>
  );
}
