import axios from 'axios';

const APIkey = '28b02eec30041207ef01c13836e6b27a';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// https://api.themoviedb.org/3/movie/550?api_key=28b02eec30041207ef01c13836e6b27a

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrendMovie = async quary => {
  const params = `&language=en-US&page=1`;

  try {
    const response = await axios.get(
      `trending/movie/day?api_key=${APIkey}&${params}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async id => {
  const params = `&language=en-US&page=1`;

  try {
    const response = await axios.get(`movie/${id}?api_key=${APIkey}&${params}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCastById = async id => {
  const params = `&language=en-US&page=1`;

  try {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${APIkey}&${params}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviewsById = async id => {
  const params = `&language=en-US&page=1`;

  try {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${APIkey}&${params}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const findMovie = async quary => {
  const params = `&language=en-US&query=${quary}&page=1`;
  try {
    const response = await axios.get(
      `/search/movie?api_key=${APIkey}&${params}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
