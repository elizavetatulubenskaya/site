// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            this.classList.toggle('active');
            var dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', function() {
        dropdowns.forEach(function(dropdown) {
            var dropdownContent = dropdown.querySelector('.dropdown-content');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
                dropdown.classList.remove('active');
            }
        });
    });
});
