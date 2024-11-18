import { Request, Response } from 'express';
import { MovieService } from '../../application/services/movie/MovieService';

const movieService = new MovieService();

export class MovieController {
  static async searchMovies(req: Request, res: Response) {
    try {
      const { query } = req.query;
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ message: 'Query parameter is required.' });
      }

      const movies = await movieService.searchMovies(query);
      res.json(movies);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}