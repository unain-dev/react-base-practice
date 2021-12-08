import axios from "axios";
import { BASE_MOVIE_URL } from "common/utils";

function getInstance() {
  const instance = axios.create({
    baseURL: BASE_MOVIE_URL,
    header: {
      "Content-type": "application/json",
    },
  });

  return instance;
}

export { getInstance };
