function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
	this.classList.toggle("active");
	var panel = this.nextElementSibling;
	if (panel.style.maxHeight){
	  panel.style.maxHeight = null;
	} else {
	  panel.style.maxHeight = panel.scrollHeight + "px";
	} 
  }
}

function myFunction() {
	// Declare variables
	var input, filter, ul, li, a, i;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName('li');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

$("#myInput").on("keyup", function() {
  $.ajax({
    type: "GET",
    data: {
      "ara": $("#myInput").val()
    },
    url: "/apim.php",
    dataType: "json",
    success: function(JSONObject) {
      var peopleHTML = "";

      for (var key in JSONObject) {
        if (JSONObject.hasOwnProperty(key)) {
        	if (JSONObject[key]["Hata"]) {
        		 peopleHTML += "<li> EÅŸleÅŸen Veri Yok";
        		 peopleHTML += "</li>";
        	}else{
	          peopleHTML += " <li>";
	            peopleHTML += '<a href="/'+JSONObject[key]["link"]+'/" title="'+JSONObject[key]["isim"]+'">';
	            peopleHTML += '<div class="baslik"><h3>'+JSONObject[key]["isim"]+'</h3></div>';
	            peopleHTML += '<div class="soru-sayisi">20</div><div class="tp">'+JSONObject[key]["gor"]+'</div>';
	          peopleHTML += "</a></li>";
	        }
        }
      }

      // Replace tableâ€™s tbody html with peopleHTML
      $("#myUL").empty().append(peopleHTML);
    }
  });
});

$(document).ready(function (){
		  // Declare Carousel jquery object
		  var owl = $('.owl-carousel');

		  // Carousel initialization
		  owl.owlCarousel({
			  loop:true,
			  margin:0,
			  navSpeed:500,
			  nav:true,
			   items:1,
			  autoplay:true
		  });


		  // add animate.css class(es) to the elements to be animated
		  function setAnimation ( _elem, _InOut ) {
			// Store all animationend event name in a string.
			// cf animate.css documentation
			var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

			_elem.each ( function () {
			  var $elem = $(this);
			  var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

			  $elem.addClass($animationType).one(animationEndEvent, function () {
				$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
			  });
			});
		  }

		// Fired before current slide change
		  owl.on('change.owl.carousel', function(event) {
			  var $currentItem = $('.owl-item', owl).eq(event.item.index);
			  var $elemsToanim = $currentItem.find("[data-animation-out]");
			  setAnimation ($elemsToanim, 'out');
		  });

		// Fired after current slide has been changed
		  owl.on('changed.owl.carousel', function(event) {

			  var $currentItem = $('.owl-item', owl).eq(event.item.index);
			  var $elemsToanim = $currentItem.find("[data-animation-in]");
			  setAnimation ($elemsToanim, 'in');
		  })

		});