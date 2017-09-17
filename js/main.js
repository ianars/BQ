'use strict';

var bigMac = document.getElementById("btn-bigMac");
var btnNavShow = document.getElementById("btn-navShow");

bigMac.addEventListener("click", mobile);
function mobile() {
  btnNavShow.classList.toggle("listShow");
  bigMac.classList.toggle("open");
}

var header = document.querySelector(".nav");
var smallMenuLinkList = document.querySelectorAll(".nav-mobile li a");
for (var i = 0; i < smallMenuLinkList.length; i++) {
  smallMenuLinkList[i].addEventListener("click", mobile);
}


$(document).ready(function(){
  $('ul.tabs li a:first').addClass('active');
  $('.sections article').hide();
  $('.sections article:first').show();

$('ul.tabs li a').click(function(){
  $('ul.tabs li a').removeClass('active');
  $(this).addClass('active');
  $('.sections article').hide();

    var activeTab = $(this).attr('href') ;
    $(activeTab).show();
    return false;
})
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
