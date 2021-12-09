import { getInstance } from "common/api/index.js";

const api = getInstance();

function getMovies(success, fail) {
  api
    .get(`list_movies.json?minimum_rating=9&sort_by=year`)
    .then(success)
    .catch(fail);
}

function getDetail(id, success, fail) {
  api.get(`movie_details.json?movie_id=${id}`).then(success).catch(fail);
}

export { getMovies, getDetail };
