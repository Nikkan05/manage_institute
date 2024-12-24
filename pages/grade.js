// Predefined grades data
const gradesData = [
    { studentId: '12345', subject: 'Mathematics', grade: 'A' },
    { studentId: '12345', subject: 'Physics', grade: 'B+' },
    { studentId: '12345', subject: 'Chemistry', grade: 'A-' },
    { studentId: '67890', subject: 'Mathematics', grade: 'C+' },
    { studentId: '67890', subject: 'Physics', grade: 'B' },
    { studentId: '67890', subject: 'Chemistry', grade: 'B-' },
];

// Store grades in localStorage (initialize once)
if (!localStorage.getItem('grades')) {
    localStorage.setItem('grades', JSON.stringify(gradesData));
}

// Function to fetch grades based on student ID
function fetchGrades() {
    const studentId = document.getElementById('studentId').value.trim();

    if (!studentId) {
        alert('Please enter a Student ID.');
        return;
    }

    const grades = JSON.parse(localStorage.getItem('grades')) || [];
    const studentGrades = grades.filter((grade) => grade.studentId === studentId);

    const gradesSection = document.getElementById('gradesSection');
    const gradesList = document.getElementById('gradesList');
    gradesList.innerHTML = ''; // Clear previous grades

    if (studentGrades.length === 0) {
        alert('No grades found for this Student ID.');
        gradesSection.style.display = 'none';
        return;
    }

    studentGrades.forEach((grade) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${grade.subject}: ${grade.grade}`;
        gradesList.appendChild(listItem);
    });

    gradesSection.style.display = 'block';
}
