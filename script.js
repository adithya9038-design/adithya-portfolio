/* -------------------------------------------------
   Firebase – Real-time Activity Feed
   ------------------------------------------------- */
const firebaseConfig = {
  apiKey: "AIzaSyCcDeRtVHdpEU8WBKpoHAN0dmtsTM53eu4",
  authDomain: "adithya-portfolio-4dbff.firebaseapp.com",
  projectId: "adithya-portfolio-4dbff",
  storageBucket: "adithya-portfolio-4dbff.firebasestorage.app",
  messagingSenderId: "297729088030",
  appId: "1:297729088030:web:aa0a94f012bfc0f9316c0f"
};

// -------------------------------------------------
// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const postsCol = collection(db, "activity_posts");

// -------------------------------------------------
// UI elements
const postInput = document.getElementById("postText");
const postBtn   = document.getElementById("postBtn");
const postsList = document.getElementById("postsList");

// -------------------------------------------------
// Add a new post
postBtn.addEventListener("click", async () => {
  const text = postInput.value.trim();
  if (!text) return;

  try {
    await addDoc(postsCol, {
      content: text,
      createdAt: serverTimestamp()
    });
    postInput.value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

// -------------------------------------------------
// Real-time listener: render posts descending (newest on top)
const postsQuery = query(postsCol, orderBy("createdAt", "desc"));
onSnapshot(postsQuery, (snapshot) => {
  postsList.innerHTML = ""; // clear current list
  snapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = data.content;
    postsList.appendChild(li);
  });
});