
// textarea characters
$("textarea").keyup(function(){
  var characterCount=$(this).val().length,
      current=$("#current"),
      maximum=$("#maximum"),
      letters=$("#letters");
      current.text(characterCount);

})


// map pins

function closePopup() {
  $("#popup").css("display", "none");
  $("body").css("overflow", "initial");
}

function initCountDown() {
  var $target = $("#cdown");
  var count = $target.text();
  var countdown;
  // var initialCount = count;
  count = count ? count : 45;

  countdown = setInterval(function () {
      $target.html(count);
      count--;
      if (count == 2) {
          clearInterval(countdown);
      }
  }, 13332); //4min
}

function scrollTopForm() {
  $("html, body").animate(
      {
          scrollTop: $("#topform").offset().top,
      },
      500
  );
}

function scrollMiddleForm() {
  $("html, body").animate(
      {
          scrollTop: $("#middleform").offset().top,
      },
      500
  );
}


//map pins
function show_hide_pins() {
  var markers = $(".markers .marker");
  var numberMakers = markers.length;

  var randomNumber = Math.floor(Math.random() * numberMakers) + 1;
  $("#marker" + randomNumber).show();

  var randomNumber = Math.floor(Math.random() * numberMakers) + 1;
  $("#marker" + randomNumber)
      .show()
      .addClass("user-online");

  setTimeout(function () {
      $("#marker" + randomNumber).removeClass("user-online");
  }, 6000);
}

function displayFirstPins(numberPins) {
  var markers = $(".markers .marker");
  var numberMakers = markers.length;

  for (i = 0; i < numberPins; i++) {
      var randomNumber = Math.floor(Math.random() * numberMakers) + 1;
      $("#marker" + randomNumber).show();
      // $("#marker" + randomNumber).css("box-shadow", "10px 10px 5px #888");

      // setTimeout(function () {
      //     $("#marker" + randomNumber).css("box-shadow", "10px 10px 5px #888");
      // }, 2000);
  }
}
//end map pins



$(document).ready(function () { 

  //live updates scroller
  if ($(".users-content").height() > $(".users-wrapper").height()) {
      setInterval(function () {
          start();
      }, 3000);
  }

  // scrollDownLiveUpdates();
  displayFirstPins(22);
  setInterval(function () {
      show_hide_pins();
  }, 3000);

  initCountDown();
});



