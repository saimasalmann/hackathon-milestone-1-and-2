var toggleButton1 = document.getElementById('toggle-btn1');
var educationSection = document.getElementById('toggle-education');
toggleButton1.addEventListener('click', function () {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        toggleButton1.textContent = 'Hide Section';
    }
    else {
        educationSection.style.display = 'none';
        toggleButton1.textContent = 'Show Section';
    }
});
var toggleButton2 = document.getElementById('toggle-btn2');
var skillsSection = document.getElementById('toggle-skills');
toggleButton2.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton2.textContent = 'Hide Section';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton2.textContent = 'Show Section';
    }
});
var toggleButton3 = document.getElementById('toggle-btn3');
var experienceSection = document.getElementById('toggle-workExp');
toggleButton3.addEventListener('click', function () {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
        toggleButton3.textContent = 'Hide Section';
    }
    else {
        experienceSection.style.display = 'none';
        toggleButton3.textContent = 'Show Section';
    }
});
