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
// --- Activity Feed Feature ---

// 1. Load existing posts from the browser's memory when the page opens
function loadPosts() {
    const feedList = document.getElementById('feed-list');
    feedList.innerHTML = ''; // Clear the list first
    
    // Get posts from localStorage, or start with an empty array if there are none
    const savedPosts = JSON.parse(localStorage.getItem('adithyaActivityPosts')) || [];
    
    savedPosts.forEach(postText => {
        const li = document.createElement('li');
        li.style.backgroundColor = '#1e1e1e';
        li.style.padding = '1rem';
        li.style.marginBottom = '0.5rem';
        li.style.borderRadius = '4px';
        li.style.borderLeft = '4px solid #ff4081'; // Pink accent for posts
        li.textContent = postText;
        feedList.appendChild(li);
    });
}

// 2. Function to add a new post when the button is clicked
function addPost() {
    const input = document.getElementById('post-input');
    const newPostText = input.value.trim();
    
    if (newPostText !== "") {
        // Get existing posts
        const savedPosts = JSON.parse(localStorage.getItem('adithyaActivityPosts')) || [];
        
        // Add the new post to the top of the list
        savedPosts.unshift(newPostText);
        
        // Save the updated list back to localStorage
        localStorage.setItem('adithyaActivityPosts', JSON.stringify(savedPosts));
        
        // Clear the input box and reload the list on screen
        input.value = '';
        loadPosts();
    }
}

// Load posts immediately when the script runs
loadPosts();