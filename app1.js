var app = angular.module("crudapp",["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl : "about.htm"
    })
    .when("/contact", {
        templateUrl : "contact.htm"
    })
     .when("/", {
        templateUrl : "home.htm"
    });
});

    


app.controller('AppController', function($scope, $http) {
     
     ReadIt(); // load all information first

    function ReadIt() {
        $http.get("ReadIt.php").then(function(result) {
            $scope.items = result.data;
        },function(data, status, headers, config) {
            console.log(data);
        })
            }


       $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                fName: $scope.name,
                lName: $scope.email
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
           
            $http.post('add.php', data, config)
            .then(function (data, status, headers, config) {
                 ReadIt();
                $scope.PostDataResponse = data;
            },function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };

     

   
});

  

    



