import axios from "axios";

export const fetchImages = ({ searchQuery, page }) => {
  const baseURL = "https://pixabay.com/api";
  const key = "21692069-20428e2069b68a036394e4dd0";

  return axios.get(
    `${baseURL}/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
};