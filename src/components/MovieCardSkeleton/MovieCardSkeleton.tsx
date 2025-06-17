import "./MovieCardSkeleton.scss";

export default function MovieCardSkeleton() {
  return (
    <div className="movie-card skeleton" style={{paddingTop: 0}}>
      <div className="movie-img-skeleton flicker"></div>
      <div className="title-skeleton flicker"></div>
    </div>
  );
}
