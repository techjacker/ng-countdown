var app = angular.module('countdown', []);

var increment = function (el, number, end, speed, suffix) {
  el.text(++number + suffix);
  if (number < end) {
    window.setTimeout(increment, speed, el, number, end, speed, suffix);
  }
};

app.directive('counter', function($rootScope) {
    return {
      templateUrl: 'tpl/main.html',
      restrict: 'EA',
      scope: {
        suffix: '@',
        speed: '@',
        start: '@',
        end: '@'
      },
      replace: true,
      link: function ($scope, $element, attrs) {

        $element.waypoint(function(direction) {
          $scope.$evalAsync(function() {
            $scope.startAnimation = true;
          });
        }, {offset: $scope.scroll || 450, triggerOnce: true});
        // }, {offset: '50%', triggerOnce: true});
        // }, {offset: 'bottom-in-view', triggerOnce: true});

        $scope.$watch('startAnimation', function (newValue) {
          if (newValue === true) {
            increment($element, $scope.start, $scope.end, $scope.speed || 20, $scope.suffix || '');
          }
        });
      }
    };
  });