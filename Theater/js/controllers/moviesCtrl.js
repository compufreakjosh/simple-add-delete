theaterApp.controller("MoviesCtrl", function ($scope, moviesService){
    //Executes when the controller is created
    $scope.movies = moviesService.movies;

    moviesService.getMovies();

    $scope.addNewMovie = function(newMovie){
        var movie = {name: newMovie.name,
        			releaseYear: newMovie.releaseYear,
        			averageRating:newMovie.averageRating
        			};
        moviesService.addNewMovie(movie);
    }
    $scope.removeMovie = function(movieId){
        var movie = {id: movieId};
        moviesService.removeMovie(movie);
    }
});
