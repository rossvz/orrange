var users = angular.module('users',[]);

users.controller('UserCtrl',function($scope){
    $scope.message = "Hello World!"
    $scope.users = Users.query();
});






// =======  FACTORY  ===========
users.factory('Users', function($resource){
    return $resource('/users/:id', null, {
        'update' : { method: 'PUT'}
    });

});