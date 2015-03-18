/**
 * Created by Ross on 2/18/15.
 */
var app = angular.module('orrangeApp', ['ui.router', 'ngResource']);



// ========  UI-ROUTER ========
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // ===== HOME ======
        .state('home',{
            url: '/home',
            templateUrl: 'app/home.html'
        })

        .state('login',{
            url: '/login',
            templateUrl:'app/login.html'
        })

        .state('signup',{
            url:'/signup',
            templateUrl:'app/signup.html'
        })

        .state('profile',{
            url: '/profile',
            templateUrl:'app/profile.html'
        })

        // ===== SONG LIBRARY ======
        .state('songLibrary',{
            url: '/songLibrary',
            templateUrl: 'app/song-library.html'
        })
        // ===== ADD SONG ======
        .state('addSong',{
            url: '/addSong',
            templateUrl: 'app/add-song.html'

        })
    // =====  SET LIST ======

        .state('currentSet',{
            url: '/currentSet',
            templateUrl: 'app/current-set.html'
    });

});


// =======  FACTORY  ===========
app.factory('Songs', function($resource){
    return $resource('/songs/:id', null, {
        'update' : { method: 'PUT'}
    });

});

app.factory('Users', function($resource){
    return $resource('/users/:id', null, {
        'update' : { method: 'PUT'}
    });

});


// =========  CONTROLLER  ============
app.controller('SongCtrl', function($scope,Songs) {

    $scope.parts = [{section: '',progression: '', note:'', measures:''}];
    $scope.songs = Songs.query();

    //SAVE AND RESET FUNCTIONS FOR NEW SONG ADDITION

    $scope.save = function(newSong,parts){
        newSong.parts = parts;
        if(!$scope.newSong || $scope.newSong.length < 1) return;

        var song = new Songs(newSong,parts);


        song.$save(function(){
            $scope.songs.push(song);

        });
    };
    $scope.addFields = function(parts){
        parts.push({section: '',progression: '', note:'',measures:''});
    };

    $scope.minusFields = function(parts){
        parts.pop();
    };

    $scope.whatIsIt = function(newSong,parts){
        console.log(newSong);
        console.log(parts);
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

app.controller('UserCtrl',function($scope,Users){
    $scope.message2 = "Hello World!";
    $scope.users = Users.query();
    console.log(users)
});


