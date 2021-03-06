angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  var vm = this;
  vm.items = [
    {title: 'Item 1', desc: 'img/food6.jpg'},
    {title: 'Item 2', desc: 'img/slide1.jpg'},
    {title: 'Item 2', desc: 'img/food4.jpg'}    
  ];
  
  vm.onSlideChanged = function(slideIndex) {
    // Do something when slide changes
  };
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('RecetteCtrl', function($scope, $stateParams) {
})

.controller('Recette2Ctrl', function($scope, $stateParams) {
})

.controller('Recette3Ctrl', function($scope, $stateParams) {
})

.controller('Recette4Ctrl', function($scope, $stateParams) {
})

.controller('Recette5Ctrl', function($scope, $stateParams) {
})

.controller('Recette6Ctrl', function($scope, $stateParams) {
})

.controller('Recette7Ctrl', function($scope, $stateParams) {
})

.controller('Recette8Ctrl', function($scope, $stateParams) {
})

.controller('Recette9Ctrl', function($scope, $stateParams) {
})

.controller('AffichageCtrl', function($scope, $stateParams, $http) {
  affichageRecette();
  function affichageRecette(){
    $http.post("http://marion-chevalier.com/myApp/php/affichage.php").success(function (data){
      $scope.recettes = data;
      console.log(data);
    });
  }
})

.controller('AddCtrl', function($scope, $stateParams, $http) {
  $scope.addRecette = function (name, ingredients, description, time) {
            $http.post("http://marion-chevalier.com/myApp/php/addRecette.php?name=" + name + "&ingredients=" + ingredients + "&description=" + description + "&img=&time=" + time).success(function (data) {
            });
        };
})

.directive('elasticImage', function($ionicScrollDelegate) {
  return {
    restrict: 'A',
    link: function($scope, $scroller, $attr) {
      var image = document.getElementById($attr.elasticImage);
      var imageHeight = image.offsetHeight;
      
      $scroller.bind('scroll', function(e) {
        var scrollTop = e.detail.scrollTop;
        var newImageHeight = imageHeight - scrollTop;
        if (newImageHeight < 0) {
          newImageHeight = 0;
        }
        image.style.height = newImageHeight + 'px';
      });
    }
  }
});
