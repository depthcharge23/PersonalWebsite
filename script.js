const ACTIVE_PROJECT = "kanto-pokedex";

const setActiveProject = () => {
    const projects = document.querySelectorAll(".project");
    const projectLinks = document.querySelectorAll(".list-group-item");

    projectLinks.forEach(link => {
        const message = link.innerHTML.split(" ").join("-").toLowerCase();

        if (message === ACTIVE_PROJECT) {
            link.classList.add("selected");
        }
    });

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

const setSelectedProject = (e) => {
    const messageId = e.target.innerHTML.split(" ").join("-").toLowerCase();
    
    const projects = document.querySelectorAll(".project");
    const projectLinks = document.querySelectorAll(".list-group-item");

    projectLinks.forEach(link => {
        link.classList.remove("selected");
    });

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

const setProjectListOnClick = () => {
    const elements = document.getElementsByClassName("list-group-item");

    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = setSelectedProject;
    }
};

const initializationFunc = () => {
    setActiveProject();
    setProjectListOnClick();
};

window.onload = initializationFunc;

