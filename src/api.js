import axios from 'axios';

const API_URL = 'http://localhost:1337'; // Adjust the URL according to your Strapi setup

export const fetchContent = async (contentType) => {
  try {
    const response = await axios.get(`${API_URL}/${contentType}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching content:', error);
    return null;
  }
};
