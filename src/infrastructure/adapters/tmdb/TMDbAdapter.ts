import axios from 'axios';
import NodeCache from 'node-cache';
import { Movie } from '../../../domain/models/Movie';
import tmdbConfig from './tmdbConfig';

export class TMDbAdapter {
  private readonly cache: NodeCache;

  constructor() {
    this.cache = new NodeCache({ stdTTL: tmdbConfig.cacheDurationSeconds });
  }

  async searchMovies(query: string): Promise<Movie[]> {
    const cacheKey = `search_${query}`;
    const cachedData = this.cache.get<Movie[]>(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    const response = await axios.get(
      `${tmdbConfig.tmdbApiUrlBase}/search/movie`,
      {
        params: {
          api_key: tmdbConfig.tmdbApiKey,
          query,
          language: tmdbConfig.language,
        },
      }
    );

    const movies = response.data.results.map(
      (item: any) =>
        new Movie(
          item.id,
          item.title,
          item.overview,
          item.release_date
        )
    );

    this.cache.set(cacheKey, movies);

    return movies;
  }
}