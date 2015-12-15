var app=angular.module("app",["ngRoute"]);angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,e){t.addPost=function(){t.postBody&&e.create({username:"sjtindellxxx",body:t.postBody}).success(function(e){t.posts.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(t,o){e.login(t,o).then(function(t){console.log(t.data)})}}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(e){return t.post("/api/posts",e)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/api/users",{headers:{"X-Auth":this.token}})},e.login=function(o,n){return t.post("/api/sessions",{username:o,password:n}).then(function(t){return e.token=t.data,e.getUser()})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImNvbnRyb2xsZXIuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuc3ZjLmpzIiwicm91dGVzLmpzIiwidXNlci5zdmMuanMiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsInVzZXJuYW1lIiwiYm9keSIsInN1Y2Nlc3MiLCJwb3N0IiwicG9zdHMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJVc2VyU3ZjIiwibG9naW4iLCJwYXNzd29yZCIsInRoZW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJzdmMiLCJnZXRVc2VyIiwiaGVhZGVycyIsIlgtQXV0aCIsInRva2VuIiwidmFsIl0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxLQUFBQyxRQUFBQyxPQUFBLE9BQ0EsV0NEQUQsU0FBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFDLEdBQ0FELEVBQUFFLFFBQUEsV0FDQUYsRUFBQUcsVUFDQUYsRUFBQUcsUUFDQUMsU0FBQSxlQUNBQyxLQUFBTixFQUFBRyxXQUNBSSxRQUFBLFNBQUFDLEdBQ0FSLEVBQUFTLE1BQUFDLFFBQUFGLEdBQ0FSLEVBQUFHLFNBQUEsUUFLQUYsRUFBQVUsUUFBQUosUUFBQSxTQUFBRSxHQUNBVCxFQUFBUyxNQUFBQSxPQ2ZBWixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBQSxTQUFBLFVBQUEsU0FBQUMsRUFBQVksR0FDQVosRUFBQWEsTUFBQSxTQUFBUixFQUFBUyxHQUNBRixFQUFBQyxNQUFBUixFQUFBUyxHQUNBQyxLQUFBLFNBQUFDLEdBQ0FDLFFBQUFDLElBQUFGLEVBQUFHLFlDTEF0QixRQUFBQyxPQUFBLE9BQ0FzQixRQUFBLFlBQUEsUUFBQSxTQUFBQyxHQUNBQyxLQUFBWCxNQUFBLFdBQ0EsTUFBQVUsR0FBQUUsSUFBQSxlQUVBRCxLQUFBbEIsT0FBQSxTQUFBSSxHQUNBLE1BQUFhLEdBQUFiLEtBQUEsYUFBQUEsT0NOQVgsUUFBQUMsT0FBQSxPQUNBMEIsUUFBQSxpQkFBQSxTQUFBQyxHQUNBQSxFQUNBQyxLQUFBLEtBQUEzQixXQUFBLFlBQUE0QixZQUFBLGVBQ0FELEtBQUEsYUFBQTNCLFdBQUEsZUFBQTRCLFlBQUEsa0JBQ0FELEtBQUEsVUFBQTNCLFdBQUEsWUFBQTRCLFlBQUEsa0JDTEE5QixRQUFBQyxPQUFBLE9BQ0FzQixRQUFBLFdBQUEsUUFBQSxTQUFBQyxHQUNBLEdBQUFPLEdBQUFOLElBQ0FNLEdBQUFDLFFBQUEsV0FDQSxNQUFBUixHQUFBRSxJQUFBLGNBQ0FPLFNBQUFDLFNBQUFULEtBQUFVLFVBR0FKLEVBQUFmLE1BQUEsU0FBQVIsRUFBQVMsR0FDQSxNQUFBTyxHQUFBYixLQUFBLGlCQUNBSCxTQUFBQSxFQUFBUyxTQUFBQSxJQUNBQyxLQUFBLFNBQUFrQixHQUVBLE1BREFMLEdBQUFJLE1BQUFDLEVBQUFkLEtBQ0FTLEVBQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcImFwcFwiLCBbXG4gIFwibmdSb3V0ZVwiXG5dKVxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIilcbi5jb250cm9sbGVyKFwiUG9zdHNDdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSwgUG9zdHNTdmMpIHtcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICB1c2VybmFtZTogXCJzanRpbmRlbGx4eHhcIixcbiAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XG4gICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uKHBvc3QpIHtcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdClcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBQb3N0c1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24ocG9zdHMpIHtcbiAgICAkc2NvcGUucG9zdHMgPSBwb3N0c1xuICB9KVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpXG4uY29udHJvbGxlcihcIkxvZ2luQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUsIFVzZXJTdmMpIHtcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgVXNlclN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgLnRoZW4oZnVuY3Rpb24odXNlcikge1xuICAgICAgY29uc29sZS5sb2codXNlci5kYXRhKVxuICAgIH0pXG4gIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKVxuLnNlcnZpY2UoXCJQb3N0c1N2Y1wiLCBmdW5jdGlvbigkaHR0cCkge1xuICB0aGlzLmZldGNoID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvcG9zdHNcIilcbiAgfVxuICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKHBvc3QpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvcG9zdHNcIiwgcG9zdClcbiAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpXG4uY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICRyb3V0ZVByb3ZpZGVyXG4gIC53aGVuKFwiL1wiLCB7Y29udHJvbGxlcjogXCJQb3N0c0N0cmxcIiwgdGVtcGxhdGVVcmw6IFwicG9zdHMuaHRtbFwifSlcbiAgLndoZW4oXCIvcmVnaXN0ZXJcIiwge2NvbnRyb2xsZXI6IFwiUmVnaXN0ZXJDdHJsXCIsIHRlbXBsYXRlVXJsOiBcInJlZ2lzdGVyLmh0bWxcIn0pXG4gIC53aGVuKFwiL2xvZ2luXCIsIHtjb250cm9sbGVyOiBcIkxvZ2luQ3RybFwiLCB0ZW1wbGF0ZVVybDogXCJsb2dpbi5odG1sXCJ9KVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpXG4uc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24oJGh0dHApIHtcbiAgdmFyIHN2YyA9IHRoaXNcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vyc1wiLCB7XG4gICAgICBoZWFkZXJzOiB7IFwiWC1BdXRoXCI6IHRoaXMudG9rZW4gfVxuICAgIH0pXG4gIH1cbiAgc3ZjLmxvZ2luID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3Nlc3Npb25zXCIsIHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSkudGhlbihmdW5jdGlvbih2YWwpIHtcbiAgICAgIHN2Yy50b2tlbiA9IHZhbC5kYXRhXG4gICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKVxuICAgIH0pXG4gIH1cbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
