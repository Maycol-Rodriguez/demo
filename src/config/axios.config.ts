import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
