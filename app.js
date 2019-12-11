var app = angular.module("crudapp",[]);

app.controller('AppController', function($scope, $http) {
     $scope.updatebtn = false;
     $scope.addbtn = true;
     
     



//   app.directive("ngFileSelect", function(fileReader, $timeout) {
//     return {
//       scope: {
//         ngModel: '='
//       },
//       link: function($scope, el) {
//         function getFile(file) {
//           fileReader.readAsDataUrl(file, $scope)
//             .then(function(result) {
//               $timeout(function() {
//                 $scope.ngModel = result;
//               });
//             });
//         }

//         el.bind("change", function(e) {
//           var file = (e.srcElement || e.target).files[0];
//           console.log(file);
//           getFile(file);
//         });
//       }
//     };
//   });

// app.factory("fileReader", function($q, $log) {
//   var onLoad = function(reader, deferred, scope) {
//     return function() {
//       scope.$apply(function() {
//         deferred.resolve(reader.result);
//       });
//     };
//   };

//   var onError = function(reader, deferred, scope) {
//     return function() {
//       scope.$apply(function() {
//         deferred.reject(reader.result);
//       });
//     };
//   };

//   var onProgress = function(reader, scope) {
//     return function(event) {
//       scope.$broadcast("fileProgress", {
//         total: event.total,
//         loaded: event.loaded
//       });
//     };
//   };

//   var getReader = function(deferred, scope) {
//     var reader = new FileReader();
//     reader.onload = onLoad(reader, deferred, scope);
//     reader.onerror = onError(reader, deferred, scope);
//     reader.onprogress = onProgress(reader, scope);
//     return reader;
//   };

//   var readAsDataURL = function(file, scope) {
//     var deferred = $q.defer();

//     var reader = getReader(deferred, scope);
//     reader.readAsDataURL(file);


//     return deferred.promise;
//   };

//   return {
//     readAsDataUrl: readAsDataURL
    
//   };
     ReadIt(); // load all information first

    function ReadIt() {
        $http.get("ReadIt.php").then(function(result) {
            $scope.items = result.data;
        },function(data, status, headers, config) {
            console.log(data);
        })
            }


       $scope.SendData = function () {
        
          $http.post('add.php',{name:$scope.name,email:$scope.email,age:$scope.age})
            .then(function (data, status, headers, config) {
                 ReadIt();
                $scope.PostDataResponse = data;
            },function (data, status, header, config) {
                $scope.message = "User added successfully.";
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });

            $scope.name=null;
            $scope.email=null;
            $scope.age = null;
        };


     $scope.DeleteIt = function(item) {

        $http.post("DeleteIt.php", { id: item }).
        then(function(data, status, headers, config) {
            ReadIt(); //refresh all information
            console.log(data);
            
        },function(data, status, headers, config) {
            console.log(data);
        });
    }

    $scope.EditIt = function(id, name, email, age) {

         $scope.updatebtn = true;
         $scope.addbtn = false;

        $scope.id = id;
        $scope.name = name;
        $scope.email = email;
        $scope.age = age;

    }


    $scope.UpadteIt = function()
    {
        $http.post("UpadteIt.php",{id:$scope.id,name:$scope.name,email:$scope.email,age:$scope.age}).
        then(function(data,status,headers,config){
            
            $scope.message = "User Edit successfully.";
           ReadIt();

        },function(data,status,headers,config){
            console.log(data);
        });
    }

   
});

  

    



