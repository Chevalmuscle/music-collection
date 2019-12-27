import axios from "axios";
import configs from "./configs";

const fetchAlbums = function() {
  return axios.get(`${configs.BACKEND_URL}/albums`).then(res => res.data);
};

const fetchAlbum = function(id) {
  return axios.get(`${configs.BACKEND_URL}/albums/${id}`).then(res => res.data);
};

export { fetchAlbums, fetchAlbum };
