angular.module("app")
.controller("LogoutCtrl", function($scope, UserSvc) {
  UserSvc.logout()
  console.log("UserSvc called logout")
  $scope.$emit("logout")
})
