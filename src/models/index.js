const Actors = require("./Actors");
const Directors = require("./Directors");
const Genres = require("./Genres");
const Movies = require("./Movies");


Movies.belongsToMany(Actors, { through: 'moviesActors'});
Actors.belongsToMany( Movies, { through: 'moviesActors'});

Directors.belongsToMany(Movies, {through: 'directorsMovies'});
Movies.belongsToMany(Directors, {through: 'directorsMovies'} );

Genres.belongsToMany(Movies, { through: 'GenresMovies'});
Movies.belongsToMany(Genres, { through: 'GenresMovies'});


