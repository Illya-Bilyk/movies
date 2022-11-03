import { SearchBar } from 'components/SearchBar/SearchBar';
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import * as API from '../../services/api';

export const Movies = () => {
  const [quary, setQuary] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const checkMovie = Object.values(params).length;

  const onSubmit = values => {
    setQuary(values);
    setSearchParams({ quary: values });
  };

  useEffect(() => {
    async function getMovie() {
      const response = await API.findMovie(quary);
      setMovies(response.results);
    }
    if (quary !== '') {
      getMovie();
    }
  }, [quary]);

  if (quary === '') {
    const searchedQuary = searchParams.get('quary');
    if (searchedQuary !== null) {
      setQuary(searchedQuary);
    }
  }

  if (checkMovie !== 0) {
    return (
      <>
        <Outlet />
      </>
    );
  }
  return (
    <>
      <SearchBar handleSubmit={onSubmit} />
      <ul>
        <nav>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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
