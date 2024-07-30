/* Установить ширину боковой панели шириной 250 пикселей и следующий и левом поле содержание страницы шириной 250 пикселей и следующий */
function openNav() {
  document.getElementById("mySidebar").style.width = "550px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Установите ширину боковой панели на 0, а левое поле содержимого страницы - на 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


// Clock Widget's date and time

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

const now = new Date()

$('#monthDay').append(`${months[now.getMonth()]} ${now.getDate()}`);

$('#year').append(`${now.getFullYear()}`);

// Clock Widget's Rotation
$(function() {

      setInterval( function() {
      var seconds = new Date().getSeconds();
      var sdegree = seconds * 6;
      var srotate = "rotate(" + sdegree + "deg)";

      $("#sec").css({ "transform": srotate });

      }, 1000 );

      setInterval( function() {
      var hours = new Date().getHours();
      var mins = new Date().getMinutes();
      var hdegree = hours * 30 + (mins / 2);
      var hrotate = "rotate(" + hdegree + "deg)";

      $("#hour").css({ "transform": hrotate});

      }, 1000 );

      setInterval( function() {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = "rotate(" + mdegree + "deg)";

      $("#min").css({ "transform" : mrotate });

      }, 1000 );

});