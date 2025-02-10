// var countDownDate = new Date("march9, 2025 00:00:00").getTime();

// // Update the countdown every 1 second
// var x = setInterval(function() {

//   // Get the current date and time
//   var now = new Date().getTime();
  
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
  
//   // Time calculations for days, hours, minutes, and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//   // Display the result in the element with id="timer"
//   document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
//   // If the countdown is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "EXPIRED";
//   }
// }, 1000);


// // Wait until the page content has fully loaded
// window.addEventListener('load', function() {
//     // Set a timeout for 5 seconds (5000 milliseconds)
//     setTimeout(function() {
//         // Hide the loading screen
//         const loadingScreen = document.getElementById('loading-screen');
//         loadingScreen.classList.add('fade-out');  // Apply fade-out effect

//         // After the fade-out completes, hide it and show the main content
//         setTimeout(function() {
//             loadingScreen.style.display = 'none'; // Hide loading screen
//             const mainContent = document.getElementById('main-content');
//             mainContent.style.display = 'block'; // Show main content
//         }, 1000); // Wait for the fade-out animation to complete (1 second)
//     }, 5000); // Wait for 5 seconds before starting the transition
// });


// // Wait until the page content has fully loaded
// window.addEventListener('load', function() {
//     // Set a timeout for 5 seconds (5000 milliseconds)
//     setTimeout(function() {
//         // Hide the loading screen
//         const loadingScreen = document.getElementById('loading-screen');
//         loadingScreen.classList.add('fade-out');  // Apply fade-out effect

//         // After the fade-out completes, hide it and show the main content
//         setTimeout(function() {
//             loadingScreen.style.display = 'none'; // Hide loading screen
//             const mainContent = document.getElementById('main-content');
//             mainContent.style.display = 'block'; // Show main content
//         }, 1000); // Wait for the fade-out animation to complete (1 second)
//     }, 5000); // Wait for 5 seconds before starting the transition
// });



window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
  
    // Play the video and wait for it to end
    const video = document.getElementById("loading-video");
    
    video.onended = function () {
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";
    };
    
    // Fallback in case video doesn't play properly
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 3500); // Show site after 5 seconds max
  });
  


document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date("2025-02-13T00:00:00");
    const daysElem = document.getElementById("days");
    const hoursElem = document.getElementById("hours");
    const minutesElem = document.getElementById("minutes");
    const secondsElem = document.getElementById("seconds");

    function updateCountdown() {
      const now = new Date();
      const timeDiff = targetDate - now;

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        daysElem.textContent = days;
        hoursElem.textContent = hours;
        minutesElem.textContent = minutes;
        secondsElem.textContent = seconds;
      } else {
        clearInterval(timer);
        document.querySelector(".countdown-container").textContent = "Event Started!";
      }
    }

    const timer = setInterval(updateCountdown, 1000);
  });