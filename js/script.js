function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.getElementById('toggleButton').addEventListener('click', function () {
    var aboutMeSection = document.getElementById('aboutMeSection');
    var icon = document.getElementById('icon');
    if (aboutMeSection.style.display === 'none') {
        aboutMeSection.style.display = 'block'; // Show the section if it's hidden
        icon.classList.remove('fa-plus'); // Remove the plus icon
        icon.classList.add('fa-minus'); // Add the minus icon
    } else {
        aboutMeSection.style.display = 'none'; // Hide the section if it's visible
        icon.classList.remove('fa-minus'); // Remove the minus icon
        icon.classList.add('fa-plus'); // Add the plus icon
    }
});