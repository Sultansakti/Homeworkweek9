const { Movie } = require('../models');

class MoviesController {
    static async getAll(req, res, next) {
        try {
            // Your logic to get all movies
            const movies = await Movie.findAll();
            res.status(200).json(movies);
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req, res, next) {
        try {
            const {name, category} = req.params;
            const newMovie = await Movie.create({name, category})
            res.status(201).json(newMovie)
    }  catch (error) {
        next(error)
    }
 }

    static async create(req, res, next) {
        try {
            // Your logic to create a movie
            const newMovie = await Movie.create(req.body);
            res.status(201).json(newMovie);
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            // Your logic to update a movie
            const movieId = req.params.id;
            const [updatedRows] = await Movie.update(req.body, { where: { id: movieId } });

            if (updatedRows === 0) {
                // Trigger the custom 'notFound' error
                const notFoundError = new Error('Movie not found');
                notFoundError.name = 'notFound';
                throw notFoundError;
            }

            res.status(200).json({ message: 'Movie updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            // Your logic to delete a movie
            const movieId = req.params.id;
            const deletedRows = await Movie.destroy({ where: { id: movieId } });

            if (deletedRows === 0) {
                // Trigger the custom 'notFound' error
                const notFoundError = new Error('Movie not found');
                notFoundError.name = 'notFound';
                throw notFoundError;
            }

            res.status(204).json();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = MoviesController;
