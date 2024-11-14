import axios from 'axios';

export const eliceInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ELICE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ELICE_API_KEY}`,
  },
});
