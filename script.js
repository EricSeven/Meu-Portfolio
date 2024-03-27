// Select button
var button = document.getElementById('read_button');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var textskills = document.querySelector('.textskills');

    // Add/Remove Class Active
    textskills.classList.toggle('active');

    if (textskills.classList.contains('active')){
        return button.textContent = 'Ver menos';
    }
    button.textContent = 'Ver mais'
});