// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.recette', {
      url: '/recette',
      views: {
        'menuContent': {
          templateUrl: 'templates/recette.html',
          controller: 'RecetteCtrl'
        }
      }
    })
    .state('app.recette2', {
      url: '/recette2',
      views: {
        'menuContent': {
          templateUrl: 'templates/recette2.html',
          controller: 'Recette2Ctrl'
        }
      }
    })
    .state('app.recette3', {
      url: '/recette3',
      views: {
        'menuContent': {
          templateUrl: 'templates/recette3.html',
          controller: 'Recette3Ctrl'
        }
      }
    })
    .state('app.recette4', {
      url: '/recette4',
      views: {
        'menuContent': {
          templateUrl: 'templates/recette4.html',
          controller: 'Recette4Ctrl'
        }
      }
    })

    .state('app.recette5', {
      url: '/recette5',
      views: {
        'menuContent': {
          templateUrl: 'templates/recette5.html',
          controller: 'Recette5Ctrl'
        }
      }
    })

    .state('app.recette6', {
      url: '/recette6',
      views: {
        'menuContent': {
          templateUrl: 'templates/recette6.html',
          controller: 'Recette6Ctrl'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
