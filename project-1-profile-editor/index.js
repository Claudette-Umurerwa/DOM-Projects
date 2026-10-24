// Change the page title and the heading

document.title = "Claudette Umurerwa";
document.querySelector("h1").textContent = "Claudette Umurerwa";

// Set the profile image src and alt

const profile = document.getElementById("profile");
profile.src ="./media/picture.jpg";
profile.alt ="My Photo";

// Add active class to the first navigation link
document.querySelector("nav a").classList.add("active");

// Add three skills from an array into the skills ul
const skills = ["HTML", "CSS", "JavaScript"];
const skillsList = document.getElementById("skills");

skills.forEach(function(skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Display today's date in the footer
document.getElementById("footer").textContent = 
"Last updated:" + new Date().toLocaleDateString();

