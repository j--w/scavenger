angular.module('scavengerApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/clues');

  $stateProvider
  .state('app', {
    abstract: true,
    url: '',
    templateUrl: 'views/Container.php'
  })
  .state('app.clues', {
    url: '/clues',
    templateUrl: 'views/AddEditClue.php',
    controller: 'clueCtrl'
  })

  .state('app.answers', {
    url: '/answers',
    templateUrl: 'views/AddEditAnswer.php',
    controller: 'answerCtrl'
  })

  .state('app.hints', {
    url: '/hints',
    templateUrl: 'views/AddEditHint.php',
    controller: 'hintCtrl'
  })

  .state('app.stories', {
    url: '/stories',
    templateUrl: 'views/AddEditStory.php',
    controller: 'storyCtrl'
  })

  .state('app.clueAssignments', {
    url: '/clues/:clueid/clueAssignments/',
    templateUrl: 'views/AssignmentsClue.php',
    controller: 'clueAssignmentsCtrl',
    params: {clueid: -1, clue: null}
    
    
  })

  .state('app.answerAssignments', {
    url: '/answers/answerAssignments/',
    templateUrl: 'views/AssignmentsAnswer.php',
    controller: 'answerAssignmentsCtrl',
    params: {answerid: -1, answer: null}
  })

  .state('app.twiMLTests', {
    url: '/TwiMLTests/',
    templateUrl: 'views/TwiMLTests.php',
    controller: 'twiMLTests'
  })

  .state('app.users', {
    url: '/users/',
    templateUrl: 'views/AddEditUser.php',
    controller: 'userCtrl'
  });

}]);