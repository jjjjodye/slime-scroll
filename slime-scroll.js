document.addEventListener('DOMContentLoaded', function () {

    // Get all elements with class 'content'
    const contents = document.querySelectorAll('.page');

    // Add event listener for scroll
    window.addEventListener('scroll', distortionEffect);

    function distortionEffect() {
        contents.forEach(content => {
            // Calculate the distance from the top of the document to the content block
            const contentTop = content.getBoundingClientRect().top;

            // Check if the content is in the viewport
            if(contentTop <= window.innerHeight && contentTop >= 0){
                // Set the cut-off point at 80% of the viewport height
                let cutOff = window.innerHeight * 0.7;
                let scaleFactor;

                if(contentTop <= cutOff) {
                    // If the content is above the cut-off point, make sure it's not distorted
                    scaleFactor = 1;
                } else {
                    // Calculate the scale factor based on the content's position in the viewport
                    // Increase the maximum scale factor to 3 for a more dramatic distortion effect
                    scaleFactor = Math.max(1, 1 + 2 * ((contentTop - cutOff) / (window.innerHeight - cutOff)));
                }

                // Apply the scale transform
                content.style.transform = `scaleY(${scaleFactor})`;
            }
        });
    }
});
