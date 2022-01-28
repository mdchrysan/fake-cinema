let app = angular.module('myApp', []);
let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=70e6eed62df915f83bd07a7eb0ac0d4e&language=en-US";
app.controller('myCtrl', function($scope, $http) {
    $http.get(url).then(function(response) {
        $scope.movies = response.data.results;
    });
    $scope.detail=function(id){
        location.href = `details.html?id=${id}`;
    }
});