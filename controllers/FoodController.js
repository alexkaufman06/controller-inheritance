pizzaCream.controller('FoodCtrl', ['$scope', '$rootScope', function FoodCtrl($scope, $rootScope) {

}]);



pizzaCream.controller('PizzaCtrl', ['$scope', function ($scope) {
  $scope.pizzas = [ {name: "Vanilla", prices: [3, 4, 5], show:false},
                    {name: "Rocky Road", prices: [4, 5, 6], show: false},
                    {name: "Cookie Dough", prices: [4, 5, 6], show:false}  ];
  var Pizza = {};

  $scope.addPizza = function($scope) {
    debugger;
  }
}]);




pizzaCream.controller('IceCreamCtrl', ['$scope', function($scope) {
  $scope.flavors = [ {name: "Cheese", prices: [3, 4, 5]},
                     {name: "Pepperoni", prices: [4, 5, 6]},
                     {name: "Sausage", prices: [4, 5, 6]}  ];
  var IceCream = {};
}]);
