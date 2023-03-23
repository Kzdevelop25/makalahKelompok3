// Get all the overlay elements
const overlays = document.querySelectorAll('.overlay');

// Set initial overlay index to 0
let index = 0;

// Function to show overlay
function showOverlay() {
  // Hide all the overlays
  overlays.forEach(overlay => {
    overlay.style.opacity = '0';
  });

  // Show current overlay
  overlays[index].style.opacity = '1';

  // Increment index for next overlay
  index = (index + 1) % overlays.length;
}

// Call the showOverlay function every 1 second
setInterval(showOverlay, 1500);
