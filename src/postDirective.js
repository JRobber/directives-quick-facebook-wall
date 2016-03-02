angular.module("wallApp").directive("post", function(){
    return {
        templateUrl: '/src/views/postView.html',
        scope: {
            post: '='
        },
        controller: function($scope){
            $scope.like = function(){
                $scope.post.liked = true;
            }  
            
            $scope.noLike = function(){
                $scope.post.liked = false;
            }
            
            $scope.likeClass = function(){
                if($scope.post.hasOwnProperty('liked') && $scope.post.liked){
                    return "highlighted"
                }
                return "";
            }
            
            $scope.noLikeClass = function(){
                if($scope.post.hasOwnProperty('liked') && !$scope.post.liked){
                   return "highlighted"
                }
                return "";
            }
        }
    }
})