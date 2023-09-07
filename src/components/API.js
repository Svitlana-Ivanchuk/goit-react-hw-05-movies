import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1320f3c051750b6d0d91045644dc09ed';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/week?language=en-US&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchSearchMovie = async newMovie => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${newMovie}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
};
