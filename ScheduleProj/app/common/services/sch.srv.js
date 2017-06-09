(function () {
    'use strict';
    angular
        .module('sch.services')
        .factory('schData', schData);

    function schData($rootScope, $filter) {


        var users = [];

        var current = {
            findUser: findUser,
            setUserschedules: setUserschedules,
            setTodaySchedule:setTodaySchedule,
            currentUser: null,
            todaySchedule: null,
            currentDate: $filter('date')(new Date(), "dd/MM/yyyy")
        };
       
      

        function setUserschedules(isStart) {
            if (isStart) {              //אם החתמת כניסה- מוסיף למערך
                current.currentUser.schedules.push({
                    date: current.currentDate,
                    timeStart: $filter('date')(new Date(), "HH:mm"),
                    timeEnd: null
                });
                setTodaySchedule();
            }
            else {  //אם החתמת יציאה חובה שיהיה באותו יום
                if (current.todaySchedule) current.todaySchedule.timeEnd = $filter('date')(new Date(), "HH:mm");
            }
        };

        function setTodaySchedule() { //מאתחל מערך של השעות של היום הנוכחי למשתמש העכשוי
            if (current.currentUser)
                current.todaySchedule = _.find(current.currentUser.schedules, { date: current.currentDate });
            else current.todaySchedule = null;
        }
      
        function findUser(username, password) {
            return _.find(users, { "userName": username, "password": password });
        };

        function activate() {
            users = getInitUsers();
            setTodaySchedule();
        }

        function getInitUsers() {
            return [
                {
                    userName: "aa", password: "a",
                    schedules: [
                        { date: "22/03/2017", timeStart: "10:00", timeEnd: "16:00" },
                        { date: "21/03/2017", timeStart: "09:00", timeEnd: "16:00" },
                        { date: "23/04/2017", timeStart: "08:00", timeEnd: "15:00" }
                    ]
                },
                {
                    userName: "bb", password: "b",
                    schedules: [
                        { date: "12/02/2017", timeStart: "08:00", timeEnd: "13:00" },
                        { date: "11/02/2017", timeStart: "08:00", timeEnd: "14:30" },
                        { date: "13/02/2017", timeStart: "08:00", timeEnd: "15:20" }
                    ]
                },
                {
                    userName: "cc", password: "c",
                    schedules: [
                        { date: "19/03/2017", timeStart: "09:10", timeEnd: "13:00" },
                        { date: "05/02/2017", timeStart: "09:30", timeEnd: "14:30" },
                        { date: "06/02/2017", timeStart: "09:50", timeEnd: "15:20" }
                    ]
                },
            ];

        };

        function getUsers() {
            return users;
        }


        activate();

        
        return current;
    }


})();