import axios from 'axios';

const baseURL = "http://localhost:7071";

export const getEvents = async (setImages, setError) => {
  try {
    const response = await axios.get(`${baseURL}/events`);
    setImages(response.data.scanResults);
    setError("");
  } catch (error) {
    setError(error.message);
  }
};