window.onload = function() {
    // Array of image URLs
    const images = [
        "https://picsum.photos/500/300?random=1",
        "https://picsum.photos/500/300?random=2",
        "https://picsum.photos/500/300?random=3"
    ];
    
    

    // To keep track of the current image index
    let currentIndex = 0;

    // Function to show the image at the current index
    function showImage(index) {
        const img = document.getElementById("slider");
        if (img) {
            img.src = images[index];
        } else {
            console.error("Image element not found!");
        }
    }

    // Function to go to the next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Function to go to the previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Show the first image when the page loads
    showImage(currentIndex);

    // Add event listeners to buttons
    document.getElementById("prevBtn").addEventListener("click", prevImage);
    document.getElementById("nextBtn").addEventListener("click", nextImage);
};
