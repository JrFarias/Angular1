(function () {
    'use strict';

    angular
        .module('main')
        .factory('framework', framework);

    framework.$inject = ['$http'];

    function framework($http) {
        var service = {
            getFramework: getFramework,
            getOneFramework: getOneFramework,
            postFramework: postFramework,
            putFramework: putFramework
        };

        return service;

        ////////////////
        function getFramework() {
            return $http.get('find').success(function (data) {
                return data;
            });
        }

        function getOneFramework(id) {
            return $http.get('findOne/'+id).success(function (data) {
                return data;
            });
        }

        function postFramework(data) {
            return $http.post('new', data);
        }

        function putFramework(Id) {
            return $http.put('updateId/' + Id);
        }
    }
})();