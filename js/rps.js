
var userName;
var userPick;
var compPick;

var playerScore = 0;
var compScore = 0;

$('.playerScore').text(playerScore);
$('.compScore').text(compScore);


function submitName(){
  //grab user name and put on scoreboard
  userName = $('#userName').val();
  $('.playerName').text(userName);
//reduce the animation delay and animate out welcome box
  $('#welcome').css('animation-delay', '.1s');
  $('#welcome').addClass("animated bounceOutRight");
  $("#swipe")[0].play();
  //bring bg elements to full opacity on delay
  setTimeout(function() {
    $('.gameInfo, .rps, .directions').css('opacity', '1');
    }, 1000);
  $('img').removeClass("rotateIn");
};

$('#submit').click(function(){
  submitName();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    submitName();
  }
});

function addHeaderZoomout(){
  $("#results").addClass("animated zoomOut");
};

function removeHeaderZoomout(){
  $("#results").removeClass("animated zoomOut");
};

function addHeaderZoomIn(){
  $("#results").addClass("animated zoomIn");
};

$("#rock").click(function(){
  userPick = rock;
  $("#spin")[0].play();
  $(this).addClass("animated rotateIn");
  setTimeout(function() {
    $(this).removeClass('animated rotateIn');
    removeHeaderZoomout();
}, 1000);
addHeaderZoomout();
    setTimeout(function(){
      pickWinner();
  }, 1000);
});

// function clickItem(){
//   $(this).addClass("animated rotateIn");
//     setTimeout(function() {
//       $(this).removeClass('animated rotateIn');
//   }, 1000);
// }

$("#paper").click(function(){
  userPick = paper;
  $("#spin")[0].play();
  $(this).addClass("animated rotateIn");
  setTimeout(function() {
    $(this).removeClass('animated rotateIn');
}, 1000);
    setTimeout(function(){
      pickWinner();
  }, 1000);
});

$("#scissors").click(function(){
  userPick = scissors;
  $("#spin")[0].play();
  $(this).addClass("animated rotateIn");
  setTimeout(function() {
    $(this).removeClass('animated rotateIn');
}, 1000);
    setTimeout(function(){
      pickWinner();
  }, 1000);
});

function setCompPickPic() {
  if (compPick == 1){
    $("#compPickItem").attr("src", "images/rock.svg");
  } else if (compPick == 2) {
    $("#compPickItem").attr("src", "images/paper.svg");
  } else {
    $("#compPickItem").attr("src", "images/scissors.svg");
  }
};

function setUserPickPic() {
  if (userPick == rock){
    $("#userPickItem").attr("src", "images/rock.svg");
  } else if (userPick == paper) {
    $("#userPickItem").attr("src", "images/paper.svg");
  } else if (userPick == scissors){
    $("#userPickItem").attr("src", "images/scissors.svg");
  }
};

function checkWinner(){
  if (userPick == rock){
    if (compPick == 1){
      $('#results').text("It's a tie, let's try again!");
    } else if (compPick == 2){
      $('#results').text("Sorry, you lost! Let's try again!");
      compScore += 1;
    } else {
      $('#results').text("You win! Great job!");
      playerScore += 1;
    }
  } else if (userPick == paper){
    if (compPick == 1){
      $('#results').text("You win! Great job!");
      playerScore += 1;
    } else if (compPick == 2){
      $('#results').text("It's a tie, let's try again!");
    } else {
      $('#results').text("Sorry, you lost! Let's try again!");
      compScore += 1;
    }
  }
    else {
      if (compPick == 1){
        $('#results').text("Sorry, you lost! Let's try again!");
        compScore += 1;
      } else if (compPick == 2){
        $('#results').text("You win! Great job!");
        playerScore += 1;
      } else {
        $('#results').text("It's a tie, let's try again!");
      }
    }
};

function pickWinner(){
  compPick = Math.floor((Math.random() * 3) + 1);
  addHeaderZoomIn()
  setCompPickPic();
  setUserPickPic()
  checkWinner();
  $(".rps").css("display", "none");
  $(".winner").css("display", "flex");
  $('.playerScore').text(playerScore);
  $('.compScore').text(compScore);
  $("#play").css("display", "block");
}

$('#play').click(function(){
$(".winner").css("display", "none");
$("#squeeze")[0].play();
setTimeout(function() {
  $(".rps").css("display", "flex");
  $('img').addClass('animated rotateIn');
}, 500);
// setTimeout(function() {
  $('img').addClass('animated rotateIn');
// }, 1500);
addHeaderZoomIn();
$('#results').text("Choose between Rock, Paper, Scissors!");
setTimeout(function() {
$('img').removeClass('animated rotateIn');
}, 1000);
})

$('#reset').click(function(){
  $("#swipe")[0].play();
  $(".winner").css("display", "none");
  setTimeout(function() {
    $(".rps").addClass("animated rotateIn");
    $(".rps").css("display", "flex");
  }, 1000);
  playerScore = 0;
  compScore = 0;
$('.playerScore').text(playerScore);
$('.compScore').text(compScore);
  $('#results').text("Choose between Rock, Paper, Scissors!");
  $("#play").css("display", "none");
  });