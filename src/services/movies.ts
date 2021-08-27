import axios, { AxiosResponse } from "axios";

async function getMovies() {
  const response: AxiosResponse = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1"
  );
  return response.data;
}

export { getMovies };
