const studentData = [
  { rollNumber: 1, name: "John Doe" },
  { rollNumber: 2, name: "Jane Smith" },
  { rollNumber: 3, name: "Michael Brown" },
];

const studentList = document.getElementById('studentList');
const attendanceLogs = document.getElementById('attendanceLogs');

// Load student list dynamically
window.onload = () => {
  studentData.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.rollNumber}</td>
      <td>${student.name}</td>
      <td><input type="checkbox" data-roll="${student.rollNumber}"></td>
    `;
    studentList.appendChild(row);
  });
};

// Handle attendance submission
document.getElementById('attendanceForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const attendance = [];

  // Get marked attendance
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    attendance.push({
      rollNumber: checkbox.getAttribute('data-roll'),
      present: checkbox.checked,
    });
  });

  // Save attendance (Simulating saving to server/localStorage)
  const today = new Date().toLocaleDateString();
  const storedLogs = JSON.parse(localStorage.getItem('attendanceLogs')) || [];
  storedLogs.push({ date: today, attendance });
  localStorage.setItem('attendanceLogs', JSON.stringify(storedLogs));

  alert('Attendance submitted successfully!');
});

// Handle viewing attendance logs
document.getElementById('viewLogsButton').addEventListener('click', () => {
  const logs = JSON.parse(localStorage.getItem('attendanceLogs')) || [];
  attendanceLogs.innerHTML = '';

  if (logs.length === 0) {
    attendanceLogs.innerHTML = '<p>No attendance logs available.</p>';
    return;
  }

  logs.forEach((log) => {
    const logDiv = document.createElement('div');
    logDiv.innerHTML = `
      <h3>Date: ${log.date}</h3>
      <ul>
        ${log.attendance.map(a => `
          <li>Roll ${a.rollNumber} - ${a.present ? 'Present' : 'Absent'}</li>
        `).join('')}
      </ul>
    `;
    attendanceLogs.appendChild(logDiv);
  });
});
