import axios from 'axios';

import { ROUTE_END_POINT } from '@/app/constants/url';

export const eliceHelpyProRouteInstance = axios.create({
  baseURL: ROUTE_END_POINT.CHAT_COMPLETION_HELPY_PRO,
});

export const eliceHelpyVRouteInstance = axios.create({
  baseURL: ROUTE_END_POINT.CHAT_COMPLETION_HELPY_V,
});
