let app = angular.module('myApp', []);
let urlNP = "https://api.themoviedb.org/3/movie/now_playing?api_key=70e6eed62df915f83bd07a7eb0ac0d4e&language=en-US";
let urlCS = "https://api.themoviedb.org/3/movie/upcoming?api_key=70e6eed62df915f83bd07a7eb0ac0d4e&language=en-US";
app.controller('myCtrl', function ($scope, $http) {
    $http.get(urlNP).then(function (response) {
        $scope.nowList = response.data.results;
    });
    $http.get(urlCS).then(function (response) {
        $scope.soonList = response.data.results;
    });
    $scope.detail = function (id) {
        location.href = `details.html?id=${id}`;
    };
});