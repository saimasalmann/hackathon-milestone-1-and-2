const toggleButton1= document.getElementById('toggle-btn1') as HTMLButtonElement;
const educationSection = document.getElementById('toggle-education') as HTMLUListElement;


  toggleButton1.addEventListener('click', () => {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        toggleButton1.textContent = 'Hide Section';
    } else {
        educationSection.style.display = 'none';
        toggleButton1.textContent = 'Show Section';
    }
});




    const toggleButton2= document.getElementById('toggle-btn2') as HTMLButtonElement;
    const skillsSection = document.getElementById('toggle-skills') as HTMLUListElement;


      toggleButton2.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleButton2.textContent = 'Hide Section';
        } else {
            skillsSection.style.display = 'none';
            toggleButton2.textContent = 'Show Section';
        }    
    });    

    const toggleButton3= document.getElementById('toggle-btn3') as HTMLButtonElement;
    const experienceSection = document.getElementById('toggle-workExp') as HTMLUListElement;


      toggleButton3.addEventListener('click', () => {
        if (experienceSection.style.display === 'none') {
            experienceSection.style.display = 'block';
            toggleButton3.textContent = 'Hide Section';
        } else {
            experienceSection.style.display = 'none';
            toggleButton3.textContent = 'Show Section';
        }    
    });    



