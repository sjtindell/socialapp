angular.module("app")
.service("PostsSvc", function($http) {
  console.error("error!")
  this.fetch = function() {
    return $http.get("/api/posts")
  }
  this.create = function(post) {
    return $http.post("/api/posts", post)
  }
})
