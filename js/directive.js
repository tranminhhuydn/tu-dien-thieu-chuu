(function(angular) {
'use strict';
var
{log} = console
angular.module('myDirective', [])
.directive('myTabs', function() {
    return {
      //require: 'ctrlUsers',
      restrict: 'E',
      transclude: true,
      scope: {
        init:'&onInit',
        click:'&onClick'
      },
      controller: ['$scope', function MyTabsController($scope) {
        var panes = $scope.panes = [];
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        };

        $scope.hide = function(obj) {
          // pane.hidden = true;
          angular.forEach(panes, function(pane) {
            if(pane.title == obj.title){

              pane.show = false;
              //console.log(pane.hidden);
            }
          });
        };
        $scope.show = function(obj) {
          //pane.hidden = false;
          angular.forEach(panes, function(pane) {
            if(pane.title == obj.title){
              pane.show = true;
              //console.log(pane.hidden);
            }
          });
        };

        this.addPane = function(pane) {
          if (panes.length === 0) {
            $scope.select(pane);
          }
          //pane.hidden = true
          panes.push(pane);
        };
        $scope.self = $scope
      }],
      //templateUrl: 'my-tabs.html'
      template:'<div class="header">'+
                '<div class="container">'+

                '<ul class="nav nav-tabs">'+
                  '<li '+
                    'ng-repeat="pane in panes"' +
                    'ng-show="pane.show"'+
                    'ng-class="[{active:pane.selected}]">'+
                    '<a href="#"'+
                    'ng-click="click({obj:pane});select(pane);">'+
                    '<span aria-hidden="true"></span> {{pane.title}}</a>'+
                  '</li>'+
                '</ul>'+
              '</div>'+
     
            '</div>'+
            '<div ng-init="init({obj:self})" class="tab-content" ng-transclude></div>'
    };
  })
  .directive('myPane', function() {
    return {
      require: '^myTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@',
        icon: '@',
        show:'@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
       },
      //templateUrl: 'my-pane.html'
      template:'<div class="tab-pane" ng-show="selected">'+
      '  <div class="container" style="min-height: 378px;">'+
      '    <div ng-transclude></div>'+
      '  </div>'+
      '</div>'
    };
  })
})(window.angular);