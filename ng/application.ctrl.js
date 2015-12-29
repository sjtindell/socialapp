angular.module("app")
.controller("ApplicationCtrl", function($scope, $http, UserSvc) {
  $scope.$on("login", function(_, user) {
    $scope.currentUser = user
  })
  $scope.$on("logout", function() {
    delete $scope.currentUser
  })
  $scope.tokenCheck = function() {
    if (window.localStorage.token) {
      token = window.localStorage.token
      $http.defaults.headers.common["X-Auth"] = token
      UserSvc.getUser()
      .then(function(body) {
        $scope.$emit("login", body.data)
      })
    }
  }
})
