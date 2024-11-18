import dotenv from 'dotenv';

dotenv.config();

const config = {
  tmdbApiUrlBase: process.env.TMDB_API_URL_BASE ?? '',
  tmdbApiKey: process.env.TMDB_API_KEY ?? '',
  cacheDurationSeconds: Number(process.env.CACHE_DURATION_SECONDS) || 30,
  language: process.env.LANGUAGE ?? 'en-US',
  port: process.env.PORT ?? 8381,
};

export default config;