import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../../services/api';
import { LinkItem } from './MovieDetails.styled';

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';

  useEffect(() => {
    async function getMovieById() {
      const response = await API.getMovieById(params.movieId);
      setMovie(response);
    }
    getMovieById();
  }, [params.movieId]);

  return (
    <>
      <LinkItem to={goBackLink}> Go back </LinkItem>
      {movie && <MovieCard movie={movie} location={goBackLink} />}
      <Outlet />
    </>
  );
};

export default MovieDetails;
