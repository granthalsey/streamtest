(function () {
  var app = angular.module("testApp", ["ngSanitize"]);

  app.controller("testController", function ($scope, $sce) {
    $scope.embedDomain = window.location.hostname || "NO DOMAIN";
    $scope.model = {};
    $scope.model.videoId = "21X5lGlDOfg";
    $scope.model.channelId = "UCLA_DiR1FfKNvjuUpBHmylQ";
    $scope.model.facebookVideoId='362846531692932'



    
    $scope.change = function(){
          $scope.model.channelSource =
      '<iframe type="text/html" width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=' +
      $scope.model.channelId +
      '&autoplay=1&mute=1"></iframe>';

    $scope.model.videoSource =
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
      $scope.model.videoId +
      '?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    $scope.model.facebookChannelSource = '<iframe src="https://www.facebook.com/plugins/video.php?height=419&href=https%3A%2F%2Fwww.facebook.com%2FNASA%2Fvideos%2F'+$scope.model.facebookVideoId+'%2F&show_text=false&width=560" width="560" height="419" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>';
      
    };
    
     $scope.change();
    $scope.deliberatelyTrustDangerousSnippet = function (s) {
      return $sce.trustAsHtml(s);
    };
  });
})();

