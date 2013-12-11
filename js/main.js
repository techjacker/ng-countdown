var app = angular.module('countdown', []);

app.directive('counter', function($rootScope, $timeout) {

  var increment = function (el, number, end, speed, suffix) {
    el.text(++number + suffix);
    if (number < end) {
      window.setTimeout(increment, speed, el, number, end, speed, suffix);
    }
  };

  return {
    templateUrl: 'tpl/main.html',
    restrict: 'EA',
    scope: {
      scroll: '@',
      suffix: '@',
      speed: '@',
      start: '@',
      end: '@'
    },
    transclude: true,
    link: function ($scope, $element, attrs) {

      var validateFn = function (newValue) {
        if ($scope.startAnimation === true && angular.isNumber(parseInt($scope.end)) && angular.isNumber(parseInt($scope.start))) {
          increment($element, parseInt($scope.start), parseInt($scope.end), parseInt($scope.speed) || 20, $scope.suffix || '');
        }
      };

      $timeout(function () {
        $element.waypoint(function(direction) {
          $scope.$evalAsync(function() {
            $scope.startAnimation = true;
          });
        }, {offset: $scope.scroll || 450, triggerOnce: true});
        // }, {offset: '50%', triggerOnce: true});
        // }, {offset: 'bottom-in-view', triggerOnce: true});
      }, 500);

      $scope.$watch('start', validateFn);
      $scope.$watch('end', validateFn);
      $scope.$watch('startAnimation', validateFn);

    }
  };
});

angular.module('countdown').run(['$templateCache', function ($templateCache) {
  $templateCache.put('tpl/main.html', '<span ng-transclude id="counter" ng-class="{\'visuallyhidden\': !startAnimation}"></span>');
}]);