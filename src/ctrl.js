angular.module('wallApp').controller('ctrl', function($scope, wallService){
  
    $scope.posts = wallService.getPosts();  
})