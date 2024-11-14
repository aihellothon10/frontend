import axios from 'axios';

import { END_POINT } from '@/app/constants/url';

import { eliceInstance } from './instance';

export const eliceHelpyProInstance = axios.create({
  baseURL: eliceInstance.defaults.baseURL + END_POINT.CHAT_COMPLETION_HELPY_PRO,
  headers: eliceInstance.defaults.headers,
});

export const eliceHelpyVInstance = axios.create({
  baseURL: eliceInstance.defaults.baseURL + END_POINT.CHAT_COMPLETION_HELPY_V,
  headers: eliceInstance.defaults.headers,
});
