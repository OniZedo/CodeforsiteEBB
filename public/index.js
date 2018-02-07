console.log("js works");
$(document).ready(function(){
  $("button").click(function(){
    console.log($("10"));
      var div = $("10");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});
