var app=angular.module("app",["ngRoute"]);angular.module("app").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(n,o){t.currentUser=o})}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,n){t.addPost=function(){t.postBody&&n.create({username:"sjtindellxxx",body:t.postBody}).success(function(n){t.posts.unshift(n),t.postBody=null})},n.fetch().success(function(n){t.posts=n})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,n){t.login=function(o,e){n.login(o,e).then(function(n){t.emit("login",response.data)})}}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(n){return t.post("/api/posts",n)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var n=this;n.getUser=function(){return t.get("/api/users",{headers:{"X-Auth":this.token}})},n.login=function(o,e){return t.post("/api/sessions",{username:o,password:e}).then(function(t){return n.token=t.data,n.getUser()})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJjb250cm9sbGVyLmpzIiwibG9naW4uY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJvdXRlcy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJG9uIiwiXyIsInVzZXIiLCJjdXJyZW50VXNlciIsIlBvc3RzU3ZjIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY3JlYXRlIiwidXNlcm5hbWUiLCJib2R5Iiwic3VjY2VzcyIsInBvc3QiLCJwb3N0cyIsInVuc2hpZnQiLCJmZXRjaCIsIlVzZXJTdmMiLCJsb2dpbiIsInBhc3N3b3JkIiwidGhlbiIsImVtaXQiLCJyZXNwb25zZSIsImRhdGEiLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJzdmMiLCJnZXRVc2VyIiwiaGVhZGVycyIsIlgtQXV0aCIsInRva2VuIiwidmFsIl0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxLQUFBQyxRQUFBQyxPQUFBLE9BQ0EsV0NEQUQsU0FBQUMsT0FBQSxPQUNBQyxXQUFBLG1CQUFBLFNBQUEsU0FBQUMsR0FDQUEsRUFBQUMsSUFBQSxRQUFBLFNBQUFDLEVBQUFDLEdBQ0FILEVBQUFJLFlBQUFELE9DSEFOLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUFBLFNBQUEsV0FBQSxTQUFBQyxFQUFBSyxHQUNBTCxFQUFBTSxRQUFBLFdBQ0FOLEVBQUFPLFVBQ0FGLEVBQUFHLFFBQ0FDLFNBQUEsZUFDQUMsS0FBQVYsRUFBQU8sV0FDQUksUUFBQSxTQUFBQyxHQUNBWixFQUFBYSxNQUFBQyxRQUFBRixHQUNBWixFQUFBTyxTQUFBLFFBS0FGLEVBQUFVLFFBQUFKLFFBQUEsU0FBQUUsR0FDQWIsRUFBQWEsTUFBQUEsT0NmQWhCLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUFBLFNBQUEsVUFBQSxTQUFBQyxFQUFBZ0IsR0FDQWhCLEVBQUFpQixNQUFBLFNBQUFSLEVBQUFTLEdBQ0FGLEVBQUFDLE1BQUFSLEVBQUFTLEdBQ0FDLEtBQUEsU0FBQWhCLEdBQ0FILEVBQUFvQixLQUFBLFFBQUFDLFNBQUFDLFlDTEF6QixRQUFBQyxPQUFBLE9BQ0F5QixRQUFBLFlBQUEsUUFBQSxTQUFBQyxHQUNBQyxLQUFBVixNQUFBLFdBQ0EsTUFBQVMsR0FBQUUsSUFBQSxlQUVBRCxLQUFBakIsT0FBQSxTQUFBSSxHQUNBLE1BQUFZLEdBQUFaLEtBQUEsYUFBQUEsT0NOQWYsUUFBQUMsT0FBQSxPQUNBNkIsUUFBQSxpQkFBQSxTQUFBQyxHQUNBQSxFQUNBQyxLQUFBLEtBQUE5QixXQUFBLFlBQUErQixZQUFBLGVBQ0FELEtBQUEsYUFBQTlCLFdBQUEsZUFBQStCLFlBQUEsa0JBQ0FELEtBQUEsVUFBQTlCLFdBQUEsWUFBQStCLFlBQUEsa0JDTEFqQyxRQUFBQyxPQUFBLE9BQ0F5QixRQUFBLFdBQUEsUUFBQSxTQUFBQyxHQUNBLEdBQUFPLEdBQUFOLElBQ0FNLEdBQUFDLFFBQUEsV0FDQSxNQUFBUixHQUFBRSxJQUFBLGNBQ0FPLFNBQUFDLFNBQUFULEtBQUFVLFVBR0FKLEVBQUFkLE1BQUEsU0FBQVIsRUFBQVMsR0FDQSxNQUFBTSxHQUFBWixLQUFBLGlCQUNBSCxTQUFBQSxFQUFBUyxTQUFBQSxJQUNBQyxLQUFBLFNBQUFpQixHQUVBLE1BREFMLEdBQUFJLE1BQUFDLEVBQUFkLEtBQ0FTLEVBQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcImFwcFwiLCBbXG4gIFwibmdSb3V0ZVwiXG5dKVxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIilcbi5jb250cm9sbGVyKFwiQXBwbGljYXRpb25DdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgZnVuY3Rpb24oXywgdXNlcikge1xuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXJcbiAgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKVxuLmNvbnRyb2xsZXIoXCJQb3N0c0N0cmxcIiwgZnVuY3Rpb24oJHNjb3BlLCBQb3N0c1N2Yykge1xuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XG4gICAgICAgIHVzZXJuYW1lOiBcInNqdGluZGVsbHh4eFwiLFxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcbiAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24ocG9zdCkge1xuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KVxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIFBvc3RzU3ZjLmZldGNoKCkuc3VjY2VzcyhmdW5jdGlvbihwb3N0cykge1xuICAgICRzY29wZS5wb3N0cyA9IHBvc3RzXG4gIH0pXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIilcbi5jb250cm9sbGVyKFwiTG9naW5DdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSwgVXNlclN2Yykge1xuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAudGhlbihmdW5jdGlvbih1c2VyKSB7XG4gICAgICAkc2NvcGUuZW1pdChcImxvZ2luXCIsIHJlc3BvbnNlLmRhdGEpXG4gICAgfSlcbiAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpXG4uc2VydmljZShcIlBvc3RzU3ZjXCIsIGZ1bmN0aW9uKCRodHRwKSB7XG4gIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS9wb3N0c1wiKVxuICB9XG4gIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24ocG9zdCkge1xuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS9wb3N0c1wiLCBwb3N0KVxuICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIilcbi5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgJHJvdXRlUHJvdmlkZXJcbiAgLndoZW4oXCIvXCIsIHtjb250cm9sbGVyOiBcIlBvc3RzQ3RybFwiLCB0ZW1wbGF0ZVVybDogXCJwb3N0cy5odG1sXCJ9KVxuICAud2hlbihcIi9yZWdpc3RlclwiLCB7Y29udHJvbGxlcjogXCJSZWdpc3RlckN0cmxcIiwgdGVtcGxhdGVVcmw6IFwicmVnaXN0ZXIuaHRtbFwifSlcbiAgLndoZW4oXCIvbG9naW5cIiwge2NvbnRyb2xsZXI6IFwiTG9naW5DdHJsXCIsIHRlbXBsYXRlVXJsOiBcImxvZ2luLmh0bWxcIn0pXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIilcbi5zZXJ2aWNlKFwiVXNlclN2Y1wiLCBmdW5jdGlvbigkaHR0cCkge1xuICB2YXIgc3ZjID0gdGhpc1xuICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzXCIsIHtcbiAgICAgIGhlYWRlcnM6IHsgXCJYLUF1dGhcIjogdGhpcy50b2tlbiB9XG4gICAgfSlcbiAgfVxuICBzdmMubG9naW4gPSBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvc2Vzc2lvbnNcIiwge1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmRcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgc3ZjLnRva2VuID0gdmFsLmRhdGFcbiAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpXG4gICAgfSlcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
