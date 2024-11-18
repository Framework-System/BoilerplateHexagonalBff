import { MovieService } from '../../../application/services/MovieService';

jest.mock('../../../infrastructure/adapters/tmdb/TMDbAdapter', () => {
  const { Movie } = require('../../../domain/models/Movie');
  return {
    TMDbAdapter: jest.fn().mockImplementation(() => {
      return {
        searchMovies: jest.fn().mockResolvedValue([
          new Movie(1, 'Test Movie', 'Overview', '2020-01-01'),
        ]),
      };
    }),
  };
});

describe('MovieService', () => {
  test('should return list of movies', async () => {
    const movieService = new MovieService();
    const movies = await movieService.searchMovies('Test');

    expect(movies.length).toBe(1);
    expect(movies[0].title).toBe('Test Movie');
  });
});