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











});


// =======  FACTORY  ===========
app.factory('Songs', function($resource){
    return $resource('/songs/:id', null, {
        'update' : { method: 'PUT'}
    });

});


// =========  CONTROLLER  ============
app.controller('SongCtrl', function($scope,Songs) {

    // ====== ANGULAR QUICK TEST =========
    $scope.quickTest = "World! I'm working!";

    $scope.songs = Songs.query();



    ////NEW SECTIONS IN NEW SONG
    //$scope.newStructure = [{section: 'progression'}, {section: 'progression'}, {section: 'progression'}];
    //$scope.newSection = function(){
    //    var newSectionBox = $scope.newStructure.length+1;
    //    $scope.newStructure.push({'section':'choice'+newSectionBox});
    //}


    //SAVE AND RESET FUNCTIONS FOR NEW SONG ADDITION

    $scope.save = function(newSong){
        if(!$scope.newSong || $scope.newSong.length < 1) return;
        var song = new Songs(newSong);

        song.$save(function(){
            $scope.songs.push(song);
            $scope.newTodo = ''; // clear textbox
        });
    };

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


