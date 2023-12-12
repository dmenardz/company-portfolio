filterSelection("all")
function filterSelection(image) {
  var filter, i;
  filter = document.getElementsByClassName("column");
  if (image == "all") image = "";
  for (i = 0; i < filter.length; i++) {
    RemoveClass(filter[i], "show");
    if (filter[i].className.indexOf(image) > -1) AddClass(filter[i], "show");
  }

  $('.column').stop().animate({
    opacity: 0
  }, 600, function () {
    if (image === "") {
      $('.column').stop().animate({
        opacity: 1
      }, 600);
    } else {
      $('.' + image).stop().animate({
        opacity: 1
      }, 600);
    }
  });
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


$(document).ready(function () {
  // Initial state: show all images
  $('.image-gallery .portfolio-box').show();

  // Filter button click event
  $('.filter-buttons button').on('click', function () {
    
   

    // Highlight the active button
    $('.filter-buttons button').removeClass('active');
    $(this).addClass('active');
  });
});
