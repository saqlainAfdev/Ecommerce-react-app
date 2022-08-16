

// select2 js

// $(document).ready(function () {
//   $(".js-example-basic-single").select2();
// });
if ($('.js-example-basic-single').length) {
  $('.js-example-basic-single').select2({
      "width": '100%',
      allowClear: false,
  });
}

// supplier slider index page

$(".suplier-slider").slick({
  infinite: true,
  dots: false,
  autoplay: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    '<span class="slick-prev slick-arrows"><svg id="slider-top" xmlns="http://www.w3.org/2000/svg" width="18.102" height="10.35" viewBox="0 0 18.102 10.35"><path id="slider-top-2" data-name="slider-top" d="M3.12,9.053,9.97,15.9a1.294,1.294,0,1,1-1.832,1.827L.377,9.969A1.291,1.291,0,0,1,.339,8.186L8.132.377A1.294,1.294,0,1,1,9.964,2.2Z" transform="translate(18.102) rotate(90)" fill="#fff"/></svg></span>',
  nextArrow:
    '<span class="slick-next slick-arrows"><svg id="slider-bottom" xmlns="http://www.w3.org/2000/svg" width="18.102" height="10.35" viewBox="0 0 18.102 10.35"><path id="slider-bottom-2" data-name="slider-bottom" d="M3.12,9.048,9.97,2.2A1.294,1.294,0,0,0,8.137.378L.377,8.132A1.291,1.291,0,0,0,.339,9.916l7.793,7.808A1.294,1.294,0,0,0,9.964,15.9Z" transform="translate(0 10.35) rotate(-90)" fill="#fff"/></svg></span>',      
  rows:1,
  vertical:true,
  responsive: [
    {
      breakpoint: 1191,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// product detail sliders


$('.pd-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  // autoplay:true,
  asNavFor: '.pd-sm-slider'
});
$('.pd-sm-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.pd-big-slider',  
  focusOnSelect: true,  
  prevArrow:
  '<span class="slick-prev slick-arrows"><svg id="arrow-left" xmlns="http://www.w3.org/2000/svg" width="9.743" height="16.708" viewBox="0 0 9.743 16.708"><path id="Path_49241" data-name="Path 49241" d="M18-13.393a.577.577,0,0,0-.167-.385l-.837-.837a.577.577,0,0,0-.385-.167.577.577,0,0,0-.385.167L9.643-8.036,3.064-14.615a.577.577,0,0,0-.385-.167.545.545,0,0,0-.385.167l-.837.837a.577.577,0,0,0-.167.385.577.577,0,0,0,.167.385l7.8,7.8a.577.577,0,0,0,.385.167.577.577,0,0,0,.385-.167l7.8-7.8A.577.577,0,0,0,18-13.393Z" transform="translate(-5.039 -1.289) rotate(90)" fill="#fff"/></svg></span>',
nextArrow:
  '<span class="slick-next slick-arrows"><svg id="arrow-right-gal" xmlns="http://www.w3.org/2000/svg" width="9.743" height="16.708" viewBox="0 0 9.743 16.708"><path id="Path_49242" data-name="Path 49242" d="M18-8.607a.577.577,0,0,1-.167.385l-.837.837a.577.577,0,0,1-.385.167.577.577,0,0,1-.385-.167L9.643-13.964,3.064-7.385a.577.577,0,0,1-.385.167.545.545,0,0,1-.385-.167l-.837-.837a.577.577,0,0,1-.167-.385.577.577,0,0,1,.167-.385l7.8-7.8a.577.577,0,0,1,.385-.167.577.577,0,0,1,.385.167l7.8,7.8A.577.577,0,0,1,18-8.607Z" transform="translate(-7.218 -1.289) rotate(90)" fill="#fff"/></svg></span>',        

  responsive: [
    {
      breakpoint: 1191,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
      
    },
    {
      breakpoint: 325,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
      
    },

  ]

});

// password view hide

$(document).ready(function(){
  
  $(".view-password").on("click", function () {    
    let input = $(this).parents('.type-pass').find(".ctm-input");
    input.attr("type", input.attr("type") === "password" ? "text" : "password");
    let inputShow = $(this).parent().find(".view-password");    
    inputShow.attr(
      "class",
      input.attr("type") === "password"
        ? "fa-solid fa-eye-slash view-password"
        : "fa-solid fa-eye view-password"
    );    
  });
  // $(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.add-product-block form').length>0 ? $('.add-product-block form .input-box').parent() : "body";
    var options={
      format: 'dd/mm/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
  // })
  
  });

  // RATTING STARS FILL JS

// star ratting js

$("body").on("click", ".xyz", function () {
  $(this).prev().prop("checked", true);
});



//   dropdown value get and set

document.querySelectorAll("div.cur-menu a.dropdown-item").forEach((element) =>
  element.addEventListener("click", (event) => {
    const val = event.target.innerText;
    document.querySelector("a.curency-toggle span.curncy-text").innerText = val;
  })
);
document.querySelectorAll("div.lang-menu a.dropdown-item").forEach((element) =>
  element.addEventListener("click", (event) => {
    const val = event.target.innerText;
    document.querySelector("a.lang-toggle span.curncy-text").innerText = val;
  })
);

//   active class in menu

let el = document.querySelectorAll("ul#mainMneu li.menu-items a.menu-link");
for (let i = 0; i < el.length; i++) {
  el[i].onclick = function () {
    let c = 0;
    while (c < el.length) {
      el[c++].className = "menu-link";
    }
    el[i].className = "menu-link active";
  };
}

// mobile menu js

function openNav() {
  document.getElementById("mySidenav").style.transform = "translateX(-10%)";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.transform = "translateX(-110%)";
  document.body.style.overflow = "auto";
}

if ($("body").hasClass("rtl")) {
  function openNav() {
    document.getElementById("mySidenav").style.transform = "translateX(10%)";
    // document.body.style.overflow = "hidden";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(110%)";
    // document.body.style.overflow = "auto";
  }
}






document.querySelectorAll("div.sort-menu a.dropdown-item").forEach((element) =>
  element.addEventListener("click", (event) => {
    event.target.classList.toggle("check");
  })
);

// map js

function initAutocomplete() {
  var mapOptions = {
    center: new google.maps.LatLng(24.193241, 55.6064385),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.HYBRID,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}








