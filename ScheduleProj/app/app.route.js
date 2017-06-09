(function () {
    'use strict';
    angular.module('schApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
          .when('/login', {
                controller: 'loginCtrl',
                templateUrl: 'pages/login/login.tpl.html',
                controllerAs: 'loginVm'
            })
               .when('/sign', {
                   controller: 'signCtrl',
                   controllerAs:'signVm',
                   templateUrl: 'pages/sign/sign.tpl.html'
               })
            .when('/report', {
                controller: 'reportCtrl',
                templateUrl: 'pages/report/report.tpl.html',
                controllerAs: 'reportVm'
            })
           
            .otherwise({
                redirectTo: '/login'
            });
    }]);
    
})();
