// this following plugin is from http://bit.ly/2MSsHjC , I used it to make the eyes follow mouse direction.
// used lil inspiration from: http://bit.ly/2M799CT
//

$(function () {
    $.mousedirection();
    $("body").bind("mousedirection", function (e) {
    });
  });
  
  
  
  
  (function ($) {
    var options = {};
    var oldx = 0;
    var oldy = 0;
    var direction="";
    $.mousedirection = function (opts) {
      var defaults = {
      };
      options = $.extend(defaults, opts);
      $(document).bind("mousemove", function (e) {
        var activeElement = e.target || e.srcElement;
        if (e.pageX > oldx && e.pageY > oldy) {
          $('.RightEye').attr("class", "RightEyeRight");
          $('.LeftEyeLeft').attr("class", "LeftEye");
          direction="bottom-right";
  
        }
        else if (e.pageX > oldx && e.pageY < oldy) {
          $('.RightEye').attr("class", "RightEyeRight");
          $('.LeftEyeLeft').attr("class", "LeftEye");
  
          direction="top-right";
        }
  
        else if (e.pageX < oldx && e.pageY < oldy) {
          $('.RightEyeRight').attr("class", "RightEye");
          $('.LeftEye').attr("class", "LeftEyeLeft");
  
          direction="top-left";
        }
        else if (e.pageX < oldx && e.pageY > oldy) {
          $('.RightEyeRight').attr("class", "RightEye");
          $('.LeftEye').attr("class", "LeftEyeLeft");
  
          direction="bottom-left";
        }
        else if (e.pageX > oldx && e.pageY == oldy) {
          $('.RightEye').attr("class", "RightEyeRight");
          $('.LeftEyeLeft').attr("class", "LeftEye");
  
          direction="right";
        }
        else if (e.pageX == oldx && e.pageY > oldy) {
          direction="down";
        }
        else if (e.pageX == oldx && e.pageY < oldy) {
          direction="up";
        }
        else if (e.pageX < oldx && e.pageY == oldy) {
          $('.RightEyeRight').attr("class", "RightEye");
          $('.LeftEye').attr("class", "LeftEyeLeft");
  
          direction="left";
        }
        $(activeElement).trigger(direction);
        $(activeElement).trigger({type:"mousedirection",direction:direction});
        oldx=e.pageX;
        oldy=e.pageY;
      });
    }
  })(jQuery);