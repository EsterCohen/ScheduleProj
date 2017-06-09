(function () {
    'use strict';
    angular
        .module('sch.report')
        .controller('reportCtrl', reportCtrl);
    function reportCtrl($scope, $rootScope, $filter, schData) {
        var vm = this;

        vm.user = schData.currentUser; 

        function activate() {
            vm.datetime = new Date();
        }
        activate();
    }
})();
