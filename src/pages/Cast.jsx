import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../services/api';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  padding-bottom: 20px;
`;

export const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState();
  const location = useLocation();

  useEffect(() => {
    async function getMovieById() {
      const response = await API.getCastById(`${params.movieId}`);
      setCast(response.cast);
    }
    getMovieById();
  }, [params.movieId]);

  if (!cast) {
    return;
  }
  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => {
        return (
          <Item key={id}>
            <div>
              <img
                src={API.IMAGE_URL + profile_path}
                alt="Actor"
                width="200px"
              />
            </div>
            <div>
              <p>
                <b>Name :</b> {name}
              </p>
              <p>
                <b>Character :</b> {character}
              </p>
            </div>
          </Item>
        );
      })}
    </ul>
  );
};
