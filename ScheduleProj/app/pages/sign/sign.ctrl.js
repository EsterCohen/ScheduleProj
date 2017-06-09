(function () {
    'use strict';
    angular
        .module('sch.sign')
        .controller('signCtrl', signCtrl);
    function signCtrl($scope, $rootScope, schData) {

        var vm = this;
        vm.Message = null;


        vm.enter = function () {
            schData.setUserschedules(true, $rootScope.currentDate);
            setMessage();
        };

        vm.exit = function () {
            schData.setUserschedules(false, $rootScope.currentDate);
            setMessage();
        };

        vm.isEnterDisabled = function () {
            if (!schData.todaySchedule)//  אם המשתמש לא החתים באותו יום   
            {
                return false;
            }
            
            return true;
        }

        vm.isExitDisabled = function () {
            if ((schData.todaySchedule && !schData.todaySchedule.timeEnd)) 
            {
                return false;
            }
            return true;
        }


        function activate() {
            
            setMessage();
        }

        var setMessage = function () {
            var today = schData.todaySchedule;
            if (today && today.timeStart && today.timeEnd) {
                vm.Message = "The sign was recived.";
            }
        };


        activate();

    }
})();
