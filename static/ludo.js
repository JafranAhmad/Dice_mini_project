
// code for showdate

function showDate() {
  document.getElementById("container").innerHTML = "<h1>" + Date() + "</h1>";
}

// code for hide date
function hideDate() {
  document.getElementById("container").innerHTML = "";
}

// code for showrandomnumber
function showRandomNumber() {
  var value = (document.getElementById("cont").innerHTML = Math.floor(
    Math.random() * 6 ) + 1);
    function showColor () {
      document.getElementById("cont").style.backgroundColor= "bisque";
    }
    showColor();


  if (value == 1) {
    document.getElementById("imagescont").innerHTML =
      "<div> <img class='animateimg' src='images/img1.png' width='100%' height='150px' /> </div>";
  } else if (value == 2) {
    document.getElementById("imagescont").innerHTML =
      "<div> <img class='animateimg' src='images/img2.png' width='100%' height='100px' /> </div>";
  } else if (value == 3) {
    document.getElementById("imagescont").innerHTML =
      "<div> <img class='animateimg' src='images/img3.png' width='100%' height='100px' /> </div>";
  } else if (value == 4) {
    document.getElementById("imagescont").innerHTML =
      "<div> <img class='animateimg' src='images/img4.png' width='100%' height='100px' /> </div>";
  } else if (value == 5) {
    document.getElementById("imagescont").innerHTML =
      "<div> <img class='animateimg' src='images/img5.png' width='100%' height='100px' /> </div>";
  } else if (value == 6) {
    document.getElementById("imagescont").innerHTML =
      "<div> <img class='animateimg' src='images/img6.png' width='100%' height='100px' /> </div>";
  } else {
    document.getElementById("imagescont").innerHTML = "";
  }
}
