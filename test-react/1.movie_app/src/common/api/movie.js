import { getInstance } from "common/api/index.js";

const api = getInstance();

function getMovies(success, fail) {
  api.get(`?minimum_rating=9&sort_by=year`).then(success).catch(fail);
}

export { getMovies };
