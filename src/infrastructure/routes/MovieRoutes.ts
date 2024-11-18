import { Router } from 'express';
import { MovieController } from '../controllers/MovieController';

const router = Router();

/**
 * @swagger
 * /movies/search:
 *   get:
 *     summary: Search for movies
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Movie name to search for
 *     responses:
 *       200:
 *         description: A list of movies
 *       400:
 *         description: Bad request
 */
router.get('/search', MovieController.searchMovies);

export default router;