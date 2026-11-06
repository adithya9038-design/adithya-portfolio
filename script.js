// Test to ensure the script is connected properly
console.log("Portfolio loaded successfully. Welcome, Adithya.");

// Placeholder data for your projects
const projects = [
    { title: "Ultron Nexus", description: "Multimodal Python AI assistant with voice and vision." },
    { title: "Walk Home Safe", description: "Women's safety Android app built in Jetpack Compose." }
];

// Function to render projects to the screen
function displayProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach(proj => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p><hr>`;
        projectList.appendChild(div);
    });
}

displayProjects();