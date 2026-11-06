// Dynamic Project Data
const projects = [
    { 
        title: "Walk Home Safe (Suraksha Bharat)", 
        description: "Voice-activated Android safety application built in Jetpack Compose that dispatches emergency location alerts via background voice triggers." 
    },
    { 
        title: "Ultron Nexus", 
        description: "Multimodal Python desktop AI assistant featuring offline pyttsx3 voice interaction, computer vision, and local Ollama integration." 
    },
    { 
        title: "Scientist Beniel's Lab", 
        description: "Custom IoT gas detection system built with Arduino Uno, an MQ-2 sensor, OLED display, and a 5V relay module." 
    },
    { 
        title: "Azure ETL Data Pipeline", 
        description: "End-to-end data engineering pipeline using Python, SQLite, and Microsoft Azure Blob Storage with automated HTML reporting." 
    }
];

// Function to render projects to the screen
function displayProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Clear existing content
    
    projects.forEach(proj => {
        const div = document.createElement('div');
        div.style.backgroundColor = '#1e1e1e';
        div.style.padding = '1rem';
        div.style.marginBottom = '1rem';
        div.style.borderRadius = '8px';
        div.style.borderLeft = '4px solid #00e5ff';
        
        div.innerHTML = `<h3 style="margin-top: 0; color: #00e5ff;">${proj.title}</h3><p>${proj.description}</p>`;
        projectList.appendChild(div);
    });
}

displayProjects();