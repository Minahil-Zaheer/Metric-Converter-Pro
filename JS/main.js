// Wait until the whole HTML page is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get the menu button (☰) from HTML
    var menuToggle = document.getElementById('menuToggle');

    // Get the navigation menu from HTML
    var mainNav = document.getElementById('mainNav');

    // Check if both elements exist
    if (menuToggle && mainNav) {

        // When the menu button is clicked
        menuToggle.addEventListener('click', function () {

            // Add or remove the "active" class on the menu
            // If active exists → remove it
            // If active does not exist → add it
            mainNav.classList.toggle('active');
        });
    }

    // When user clicks anywhere on the page
    document.addEventListener('click', function (event) {

        // Check again if elements exist
        if (mainNav && menuToggle) {

            // If the click is NOT inside the menu
            // AND NOT on the menu button
            if (
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                // Close the menu
                mainNav.classList.remove('active');
            }
        }
    });

    // When the window size changes (resize)
    window.addEventListener('resize', function () {

        // If screen width becomes larger than mobile size
        if (window.innerWidth > 768 && mainNav) {

            // Close the mobile menu
            mainNav.classList.remove('active');
        }
    });

});

