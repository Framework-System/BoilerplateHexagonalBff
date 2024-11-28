import type { Movie } from '../../../domain/models/movie/Movie';
import { TMDbAdapter } from '../../../infrastructure/adapters/tmdb/TMDbAdapter';

export class MovieService {
  private readonly movieRepository: TMDbAdapter;

  constructor() {
    this.movieRepository = new TMDbAdapter();
  }

  async searchMovies(query: string): Promise<Movie[]> {
    return await this.movieRepository.searchMovies(query);
  }
}