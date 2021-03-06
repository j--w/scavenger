angular.module('scavengerApp')
  .controller('hintCtrl', ['$scope', '$rootScope', '$state', '$http', 'ListService', function($scope, $rootScope, $state, $http, ListService) {
    $scope.loaded = false;
    var list = ListService;

    $scope.clues = {};
    var cluesList = ListService;

    cluesList.http({fn: "getEntities", entityName: "Clue"},
      function (response) {
          cluesList.setList(response);
          $scope.clues = cluesList.getList();
      },
      function(response){
        console.log(response);
      });

    list.http({fn: "getEntities", entityName: "Hint"},
      function (response) {
          list.setList(response);
          $scope.loaded = true;
          //console.log(response);
          $scope.hintList = list.getList();
      },
      function(response){
        console.log(response);
      });

    $scope.hintCtrlFormData = {id : "-1", name: "", value : "", clue: "-1"};

    $scope.hintCtrlFormData.submit = function(item, event) {
      var data = {fn: "aehint", id : $scope.hintCtrlFormData.id, name: $scope.hintCtrlFormData.name, value : $scope.hintCtrlFormData.value, clue: $scope.hintCtrlFormData.clue}

      list.http(data, 
          function (response) {
            data.id = response.id;
            $scope.hintList[data.id] = data;
          },
          function (response) {
            console.log(response);
          }
        );

      $scope.hintCtrlFormData.reset();
    }

     $scope.hintCtrlFormData.reset = function() {
      $scope.hintCtrlFormData.id = -1;
      $scope.hintCtrlFormData.name = "";
      $scope.hintCtrlFormData.value = "";
      $scope.hintCtrlFormData.clue = -1;
     }

     $scope.editItem = function(item) {
      $scope.hintCtrlFormData.id = item.id;
      $scope.hintCtrlFormData.name = item.name;
      $scope.hintCtrlFormData.value = item.value;
      $scope.hintCtrlFormData.clue = item.clue;
     }

    $scope.deleteItem = function(item) {
      var data = {fn: 'deleteEntity', id : item.id, entityName: "Hint"};

      list.http(data, 
          function (response) {
            delete $scope.hintList[item.id];
          },
          function (response) {
            console.log(response);
          }
        );
    };

    $scope.changeState = function(stateName) {
      $state.go(stateName);
    };
}]);

