export const API_CONFIG = {
  sportsDB: {
    baseUrl: import.meta.env.VITE_SPORTSDB_BASE_URL,
    apiKey: import.meta.env.VITE_SPORTSDB_API_KEY,
  },

  football: {
    baseUrl: import.meta.env.VITE_FOOTBALL_API_BASE_URL,
    apiKey: import.meta.env.VITE_FOOTBALL_API_KEY,
  },

  news: {
    baseUrl: import.meta.env.VITE_NEWS_API_BASE_URL,
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
  },

  images: {
    baseUrl: import.meta.env.VITE_IMAGE_API_BASE_URL,
    apiKey: import.meta.env.VITE_IMAGE_API_KEY,
  },
};
