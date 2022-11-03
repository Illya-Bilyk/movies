import * as API from '../../services/api';
import { Link } from 'react-router-dom';
import {
  Wraper,
  Poster,
  DescriptionWrap,
  AdditionalWrap,
} from './MovieCard.styled';

export const MovieCard = ({ movie, location }) => {
  const { poster_path, vote_average, title, overview } = movie;
  const namedGenres = movie.genres.map(genr => genr.name);
  const movieRating = Math.floor(vote_average * 10);

  return (
    <>
      <Wraper>
        <div>
          <Poster src={API.IMAGE_URL + poster_path} alt="poster" />
        </div>
        <DescriptionWrap>
          <h2>{title}</h2>
          <p>User score: {movieRating}%</p>
          <b>Overview :</b>
          <p>{overview}</p>
          <b>Genres :</b>

          {namedGenres.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </DescriptionWrap>
      </Wraper>
      <AdditionalWrap>
        <b>Additional information</b>
        <nav>
          <ul>
            <li>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
      </AdditionalWrap>
    </>
  );
};
