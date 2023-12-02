import axios from 'axios';

export const submitDataToFirestore = async (data) => {
  // Add Firestore submission logic
  // Example using axios:
  // await axios.post('https://your-firestore-api-endpoint', data);
};

export const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
