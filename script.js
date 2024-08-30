let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset to first slide after the last one

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");  // Remove active class from all dots
    }

    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    dots[slideIndex - 1].classList.add("active");    // Set active class to the current dot

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function currentSlide(n) {
    slideIndex = n;  // Set the slideIndex to the clicked slide
    showSlides();    // Update the slides
}