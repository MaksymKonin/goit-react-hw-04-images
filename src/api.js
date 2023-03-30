import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';

export const fetchSearchQuery = async (searchQuery, page) => {
  const response = await axios.get(baseURL, {
    params: {
      q: searchQuery,
      page: page,
      key: '33670116-4dfcd9849459bc1b79bb05430',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  const newImages = [];
  response.data.hits.forEach(({ id, webformatURL, largeImageURL }) => {
    newImages.push({ id, webformatURL, largeImageURL });
  });
  return { newImages, total: response.data.totalHits };
};
