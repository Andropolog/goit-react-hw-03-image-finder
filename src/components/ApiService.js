import axios from 'axios';

const KEY = '21713203-59f88e93ebf9f6a1a38c26b66';
const FetchPics = async (query, page = 1) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return response.data.hits;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { FetchPics };