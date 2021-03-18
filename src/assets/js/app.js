 var currentMonth = new Date().getMonth();
//  var currentMonth = 10;
 var change ;
 var disabled = false;
 console.log('mooonth', currentMonth);
 if(currentMonth <= 7 ){
    change = false;
 }
 else{
     change = true;
     if (currentMonth >= 11){
        disabled = true;
     }
 }
console.log ('change', change)
 var countDownDate = new Date("December 7, 2021 16:37:52").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
   //  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours; 
    document.getElementById("mins").innerHTML = minutes; 
   //  document.getElementById("secs").innerHTML = seconds;  

    // Display the message when countdown is over
    if (timeleft <= 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00" 
        document.getElementById("mins").innerHTML = "00"
      //   document.getElementById("secs").innerHTML = "00"
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);

    window.onscroll = function() {scrollFunction(), scrollActive()};

function scrollFunction() {
   const height = document.body.scrollTop || document.documentElement.scrollTop ;
  if (height > 10) {
     document.getElementById("navbar").classList.add("scrolledNav")
  } else {
     document.getElementById("navbar").classList.remove("scrolledNav")
  }
}

//  window.onscroll = function(){}
 function scrollActive(){
		var scrollDistance = $(window).scrollTop();
		// Assign active class to nav links while scolling
		$('.section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navigation li a.active').removeClass('active');
						$('.navigation li a').eq(i).addClass('active');
				}
		});
};