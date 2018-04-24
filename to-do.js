angular.module('todoApp', [])
  .controller('TodoController', function($scope) {

    $scope.isHideLeftPanel = false;
    
    $scope.onTogglePanel = function() {
      // if ($scope.isHideLeftPanel == true) {
      //   $scope.isHideLeftPanel = false;
      // } else {
      //   $scope.isHideLeftPanel = true;
      // }
      var tên = 'hiếu';
      if (tên === 'hiếu') {
        console.log('Tên là hiếu')
      } else {
        console.log('Tên là duy')
      }
    }

});
