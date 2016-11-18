
var myApp = angular.module("myModule",[]);




var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var country = {
						name: "KENYA",
						capital: "Nairobi",
						flag: "images/kenya.png"

					};
					$scope.country = country;
				});