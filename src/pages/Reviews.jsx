import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../services/api';

export const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState();
  const location = useLocation();

  useEffect(() => {
    async function getMovieById() {
      const response = await API.getReviewsById(`${params.movieId}`);
      setReviews(response.results);
    }
    getMovieById();
  }, [params.movieId]);

  if (!reviews) {
    return;
  }

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <b>Author : {author}</b>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
