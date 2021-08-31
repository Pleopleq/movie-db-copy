import axios, { AxiosResponse } from "axios";
const DANGEROUSLY_API_KEY_DEFINITION = "4f298a53e552283bee957836a529baec";

async function getMoviesBy(query: string) {
  const response: AxiosResponse = await axios.get(
    `https://api.themoviedb.org/3/movie/${query}?api_key=${DANGEROUSLY_API_KEY_DEFINITION}&language=en-US&page=1`
  );
  return response.data;
}

export { getMoviesBy };
