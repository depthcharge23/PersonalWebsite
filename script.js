// Global Variables
const ACTIVE_PROJECT = "kanto-pokedex";
const HEADER_OFFSET = 60;

// Sets the active project based on the ACTIVE_PROJECT variable
const setActiveProject = () => {
    const projects = document.querySelectorAll(".project");
    const projectLinks = document.querySelectorAll(".list-group-item");

    // Loops through the links setting the ACTIVE_PROJECT to selected
    projectLinks.forEach(link => {
        const message = link.innerHTML.split(" ").join("-").toLowerCase();

        if (message === ACTIVE_PROJECT) {
            link.classList.add("selected");
        }
    });

    // Hides all of the sections that are not associated to the ACTIVE_PROJECT
    projects.forEach(project => {
        if (project && project.id) {
            if (project.id !== ACTIVE_PROJECT) {
                project.hidden = true;
            } else {
                project.hidden = false;
            }
        }
    });
};

// Selects the project that the user has clicked, while deselecting any other projects.
const setSelectedProject = (e) => {
    const messageId = e.target.innerHTML.split(" ").join("-").toLowerCase();
    
    const projects = document.querySelectorAll(".project");
    const projectLinks = document.querySelectorAll(".list-group-item");

    // Deselects projects
    projectLinks.forEach(link => {
        link.classList.remove("selected");
    });

    // Selects the project the user clicked
    projects.forEach(child => {
        if (child && child.id) {
            if (child.id !== messageId) {
                child.hidden = true;
            } else {
                child.hidden = false;
                e.target.classList.add("selected");
            }
        }
    });
};

// Give the elements with a class of "list-group-item" the onclick event of setSelectedProject
const setProjectListOnClick = () => {
    const elements = document.getElementsByClassName("list-group-item");

    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = setSelectedProject;
    }
};

// Scroll to the associated section on the webpage
const scrollTo = (e) => {
    e.preventDefault();

    const sectionId = e.target.innerHTML.split(" ").join("-").toLowerCase() + "-section";
    const element = document.getElementById(sectionId);
    const bodyPosition = document.body.getBoundingClientRect().top;
    const elementPosition = element.getBoundingClientRect().top;
    const elementRect = elementPosition - bodyPosition;
    const offsetPosition = elementRect - HEADER_OFFSET;

    window.scrollTo({
        "top": offsetPosition,
        "behavior": "smooth"
    });
    
};

// Assign the scrollTo function to the navigation links in the nav bar
const setScrollTo = () => {
    const navLinks = document.getElementsByClassName("nav-link");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].onclick = scrollTo;
    }
};

// Call all of the initailization functions
const initializationFunc = () => {
    setActiveProject();
    setProjectListOnClick();
    setScrollTo();
};

window.onload = initializationFunc;

