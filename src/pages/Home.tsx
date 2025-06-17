import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import tmdbApi, { movieType } from "../api/tmdbApi";
import { type Movie } from "../types/Movie";

import SearchBar from "../components/SearchBar/SearchBar";
import ErrorBanner from "../components/ErrorBanner";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { OutlineButton } from "../components/Button/Button";
import Loading from '../components/Loading/Loading';

import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton";

type Category = keyof typeof movieType;

export default function Home() {
  const location = useLocation();
  const categoryFromPath = useMemo(() => {
    if (location.pathname.includes("top-rated")) return "top_rated";
    return "now_playing";
  }, [location.pathname]);

  const [query, setQuery] = useState(""); // Input text
  const [searchQuery, setSearchQuery] = useState(""); // Committed search
  const [category, setCategory] = useState<Category>(categoryFromPath);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMovies = async (
    page: number,
    selectedCategory: Category = category,
    search = searchQuery
  ) => {
    setLoading(true);
    setError(null);

    try {
      let response;

      if (search.trim()) {
        response = await tmdbApi.search("movie", {
          params: {
            query: search,
            page,
          },
        });
      } else {
        response = await tmdbApi.getMoviesList(selectedCategory, {
          params: { page },
        });
      }

      const data = response;
      console.log("$$$nhanhh🚀[Home.tsx:59]: data: ", data);

      if (page === 1) {
        setMovies(data.results);
      } else {
        setMovies((prev) => [...prev, ...data.results]);
      }

      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCategory(categoryFromPath);
    loadMovies(1, categoryFromPath, searchQuery);
  }, [categoryFromPath, searchQuery]);

  const handleSearch = (text: string) => {
    setSearchQuery(text.trim());
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      loadMovies(currentPage + 1, category, searchQuery);
    }
  };

  return (
    <div className="container home-page">
      <div
        className="fake-header-block"
        style={{ height: "8rem", visibility: "hidden" }}
      ></div>
      <SearchBar
        value={query}
        onInputChange={setQuery}
        onSearch={handleSearch}
      />
      
      {loading && currentPage === 1 && <Loading text="Loading ..."/>}

      {error && <ErrorBanner message={error} />}

      {/* {(!loading || (loading && currentPage < totalPages)) && <MovieGrid movies={movies} loading={loading}/> } */}
      <MovieGrid movies={movies} loading={loading}/>
      {currentPage < totalPages && !loading && (
        <div style={{ textAlign: "center", margin: "1rem" }}>
          <div className="movie-grid__loadmore">
            <OutlineButton className="large" onClick={handleLoadMore}>
              Load more
            </OutlineButton>
          </div>
        </div>
      )}

      {loading && currentPage > 1 && (
        <Loading text="Loading more ..."/>
      )}
      <ScrollTopButton />
    </div>
  );
}
