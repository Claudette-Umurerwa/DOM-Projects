
// Student data
const students = [
    { name: "Alice", track: "Frontend", score: 90 },
    { name: "Bob", track: "Backend", score: 45 },
    { name: "Charlie", track: "Frontend", score: 78 },
    { name: "Diana", track: "Backend", score: 85 },
    { name: "Eric", track: "Frontend", score: 35 },
    { name: "Faith", track: "Backend", score: 80 },
    { name: "Grace", track: "Frontend", score: 95 },
    { name: "Henry", track: "Backend", score: 60 }
];

// 1. Sort a copy of the array
// Frontend students should appear first
const sortedStudents = [...students];

sortedStudents.sort(function(a, b) {
    if (a.track === "Frontend" && b.track !== "Frontend") {
        return -1;
    }

    if (a.track !== "Frontend" && b.track === "Frontend") {
        return 1;
    }

    return 0;
});

// 2. Find the student board
const studentBoard = document.getElementById("student-board");

// 3. Render student cards
sortedStudents.forEach(function(student) {
    const card = document.createElement("div");

    // Add the basic card class
    card.classList.add("student-card");

    // Highlight scores of 80 or above
    if (student.score >= 80) {
        card.classList.add("high-score");
    }

    // Mark failed scores below 50 in red
    if (student.score < 50) {
        card.classList.add("red");
    }

    // Add student details
    card.innerHTML = `
        <h3>${student.name}</h3>
        <p>Track: ${student.track}</p>
        <p>Score: ${student.score}</p>
    `;

    // Add the card to the page
    studentBoard.appendChild(card);
});

// 4. Display the total number of students
document.getElementById("student-count").textContent =
    students.length;

// 5. Calculate the average score
const totalScore = students.reduce(function(total, student) {
    return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

document.getElementById("average-score").textContent =
    averageScore.toFixed(2);

// 6. Find the highest score
const highestScore = Math.max(
    ...students.map(function(student) {
        return student.score;
    })
);

// Find all students with the highest score
const topStudents = students.filter(function(student) {
    return student.score === highestScore;
});

// Display the top student or students
const topStudentsList = document.getElementById("top-students");

topStudents.forEach(function(student) {
    const li = document.createElement("li");
    li.textContent = student.name + " - " + student.score;
    topStudentsList.appendChild(li);
});