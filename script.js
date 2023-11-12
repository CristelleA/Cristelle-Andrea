// Scroll down to the next section
function scrollDown() {
    const currentSection = document.querySelector('.current-section');
    let nextSection;

    if (currentSection) {
        switch (currentSection.id) {
            case 'home':
                nextSection = document.getElementById('about');
                break;
            case 'about':
                nextSection = document.getElementById('skills');
                break;
            case 'skills':
                nextSection = document.getElementById('projects');
                break;
            case 'projects':
                nextSection = document.getElementById('contact');
                break;
            // Add more cases as needed

            default:
                // If the current section is not one of the specified, do nothing
                return;
        }

        if (nextSection) {
            currentSection.classList.remove('current-section');
            nextSection.scrollIntoView({ behavior: 'smooth' });
            nextSection.classList.add('current-section');
        }
    }
}

// Scroll up to the previous section
function scrollUp() {
    const currentSection = document.querySelector('.current-section');
    let previousSection;

    if (currentSection) {
        switch (currentSection.id) {
            case 'about':
                previousSection = document.getElementById('home');
                break;
            case 'skills':
                previousSection = document.getElementById('about');
                break;
            case 'projects':
                previousSection = document.getElementById('skills');
                break;
            case 'contact':
                previousSection = document.getElementById('projects');
                break;
            // Add more cases as needed

            default:
                // If the current section is not one of the specified, do nothing
                return;
        }

        if (previousSection) {
            currentSection.classList.remove('current-section');
            previousSection.scrollIntoView({ behavior: 'smooth' });
            previousSection.classList.add('current-section');
        }
    }
}
