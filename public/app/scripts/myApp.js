/**
 * Created by Ross on 2/18/15.
 */
var app = angular.module('orrangeApp', ['ui.router', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // ===== HOME ======
        .state('home',{
            url: '/home',
            templateUrl: 'app/home.html'
        })

        .state('home.alpha',{
            templateUrl:'app/home.alpha.html'
        })

        .state('home.beta',{
            templateUrl:'app/home.beta.html'
        })

        // ===== SONG LIBRARY ======
        .state('songLibrary',{
            url: '/songLibrary',
            templateUrl: 'app/song-library.html'
        })
        // ===== ADD SONG ======
        .state('addSong',{
            url: '/addSong',
            templateUrl: 'app/add-song.html',

        });
    // =====  SET LIST ======

    //THIS WILL BE IMPLEMENTED LATER

});


// =======  FACTORY  ===========
app.factory('Songs', function($resource){
    return $resource('/songs/:id', null, {
        'update' : { method: 'PUT'}
    });

});


// =========  CONTROLLER  ============
app.controller('SongCtrl', function($scope,Songs) {

    $scope.parts = [{section: '',progression: '', note:''}];
    $scope.songs = Songs.query();

    //SAVE AND RESET FUNCTIONS FOR NEW SONG ADDITION

    $scope.save = function(newSong,parts){
        if(!$scope.newSong || $scope.newSong.length < 1) return;

        var song = new Songs(newSong,parts);

        song.$save(function(){
            $scope.songs.push(song);
            $scope.songs.parts.push(parts);

        });
    };
    $scope.addFields = function(parts){
        parts.push({section: '',progression: '', note:''});
    }
    $scope.reset = function(form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
        $scope.new = angular.copy($scope.songs);
    };

    $scope.reset();

    // ==== REMOVE SONG ====
    $scope.remove = function(index){
        var song = $scope.songs[index];
        Songs.remove({id: song._id}, function(){
            $scope.songs.splice(index, 1);
        })
    }
});


