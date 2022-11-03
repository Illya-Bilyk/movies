import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from '../services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getTrendMovies() {
      const getMovies = await API.getTrendMovie('trending/movie/day');
      setMovies(getMovies.results);
    }
    getTrendMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        <nav>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </nav>
      </ul>
    </>
  );
};
