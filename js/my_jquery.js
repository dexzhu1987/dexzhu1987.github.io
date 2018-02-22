
//scroll smoothly
// Select all links with hashes
$(document).ready(function (){
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	

	
	
	 });





//scollspy
var lastId,
    topMenu = $("#sidebar"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});





//stiky navbar
var navbar = document.getElementById("sidebar");
var sticky = navbar.offsetTop;
var footer = document.getElementById("footer")


function myFunction() {	
 
  if (window.pageYOffset+55 >= sticky) {
    navbar.classList.add("sticky_self")
  } else {
    navbar.classList.remove("sticky_self");
  }
	
  if (window.pageYOffset+330>= footer.offsetTop){
	  navbar.style.display="none"
  }
	else {
		navbar.style.display="block"
	}
  
}




//modal image

var modal = document.getElementById('myModal_project');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('elysian');
var overlayclick = document.getElementById('overlayclick');
var modalImg = document.getElementById("imgelysian");
var captionText = document.getElementById("caption_project");
overlayclick.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_project")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}





//change button display

$('.btn-success').click(function(){
    $(this).text(function(i,old){
        return old=='More' ?  'Hide' : 'More';
    });
});



