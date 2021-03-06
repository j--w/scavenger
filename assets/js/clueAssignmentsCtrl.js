angular.module('scavengerApp')
  .controller('clueAssignmentsCtrl', ['$scope', '$rootScope', '$state', '$http', 'ListService', function($scope, $rootScope, $state, $http, ListService) {

    var aaList = ListService;
    var taList = ListService;
    var hList = ListService;

    $scope.aaLoaded = false;
    $scope.taLoaded = false;
    $scope.hLoaded = false;


    $scope.changeState = function(stateName) {
      $state.go(stateName);
    };

    aaList.http({fn: "getEntities", entityName: "Clue"},
      function (response) {
        $scope.clueAssignmentCtrlForm = response[$state.params.clueid];
      

        if ($scope.clueAssignmentCtrlForm === null)
        {
            $scope.changeState("app.clues");
        }
        else
        {
            //Get assignments for current clue              
            aaList.http({fn: "getEntities", entityName: "Answer"},
              function (response) {
                angular.forEach(response, function(item) {
                  item.checked = false;
                  angular.forEach($scope.clueAssignmentCtrlForm.answers, function (answer) {
                    if(answer.id == item.id)
                      item.checked = true;
                    });
                });

                aaList.setList(response);
                $scope.aaList = aaList.getList();
                $scope.aaLoaded = true;
              },
              function(response){
                console.log(response);
              });

            taList.http({fn: "getEntities", entityName: "Answer"},
              function (response) {
                angular.forEach(response, function(item) {
                  item.checked = false;
                  // if (item.clueID == $scope.clueAssignmentCtrlForm.id)
                  angular.forEach($scope.clueAssignmentCtrlForm.trailings, function (answer) {
                    if(answer.id == item.id)
                      item.checked = true;
                    });
                });

                taList.setList(response);
                $scope.taList = taList.getList();
                $scope.taLoaded = true;
              },
              function(response){
                console.log(response);
              });

            hList.http({fn: "getEntities", entityName: "Hint"},
              function (response) {
                angular.forEach(response, function(item) {
                  item.checked = false;
                  angular.forEach($scope.clueAssignmentCtrlForm.hints, function (answer) {
                    if(answer.id == item.id)
                      item.checked = true;
                    });
                });

                hList.setList(response);
                $scope.hList = hList.getList();
                $scope.hLoaded = true;
              },
              function(response){
                console.log(response);
              });
        }
      });

    $scope.assignAA = function(event, item) {
        if (event.target.tagName == "INPUT")
        {
          //item.checked = !item.checked;
          var data = {fn: "assignAnswer", clueid: $state.params.clue.id, answerid: item.id, checked: item.checked};
          console.log(data);
          aaList.http(data, function(response) {
            //item.checked = !item.checked;
          }, function(response) {console.log(response);});
        }
     };

    $scope.assignTA = function(event, item) {
      if (event.target.tagName == "INPUT")
      {
        // item.checked = !item.checked;
        var data = {fn: "assignNextClue", clueid: $state.params.clue.id, answerid: item.id, checked: item.checked};
        console.log(data);
        taList.http(data, function(response) {
          //console.log("success");
        }, function(response) {console.log(response);});
      }
     };

    $scope.assignH = function(event, item) {
      if (event.target.tagName == "INPUT")
      {
        // item.checked = !item.checked;
        var data = {fn: "assignClueHint", clueid: $state.params.clue.id, hintid: item.id, checked: item.checked};
        console.log(data);
        hList.http(data, function(response) {
          //console.log("success");
        }, function(response) {console.log(response);});
      }
     };
  }]);