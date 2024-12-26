// moving boxes 
document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee");
  
    // Clone the original boxes to make the scrolling seamless
    const originalBoxes = marquee.innerHTML;
    marquee.innerHTML += originalBoxes;
  });
  

  