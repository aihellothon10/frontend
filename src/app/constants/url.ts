export const END_POINT = {
  CHAT_COMPLETION_HELPY_V: '/6b6ac971-f63f-4e75-b363-f8d40e9e08a1/v1/chat/completions',
  CHAT_COMPLETION_HELPY_PRO: '/5a327f26-cc55-45c5-92b7-e909c2df0ba4/v1/chat/completions',
};

export const ROUTE_END_POINT = {
  ROOT: '/apis',
  get CHAT_COMPLETION_HELPY_V() {
    return `${this.ROOT}/helpy-v`;
  },
  get CHAT_COMPLETION_HELPY_PRO() {
    return `${this.ROOT}/helpy-pro`;
  },
};
