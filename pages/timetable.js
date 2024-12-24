// Initialize events array with pre-added events
let events = [
    { name: "Orientation Day", date: "2024-12-30" },
    { name: "Mid-Semester Exam", date: "2025-01-15" },
    { name: "Cultural Fest", date: "2025-02-05" }
];

// Function to add event
function addEvent() {
    const eventName = document.getElementById('event-name').value.trim();
    const eventDate = document.getElementById('event-date').value;

    if (!eventName || !eventDate) {
        alert("Please fill out all fields!");
        return;
    }

    // Add to events array
    events.push({ name: eventName, date: eventDate });
    document.getElementById('event-name').value = '';
    document.getElementById('event-date').value = '';

    // Update table
    renderEvents();

    // Placeholder for email functionality
    scheduleEmailReminder(eventName, eventDate);
}

// Function to render events in the table
function renderEvents() {
    const tableBody = document.getElementById('event-table');
    tableBody.innerHTML = '';

    events.forEach((event, index) => {
        const row = `
            <tr>
                <td>${event.name}</td>
                <td>${event.date}</td>
                <td>
                    <button class="delete-btn" onclick="deleteEvent(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Function to delete event
function deleteEvent(index) {
    events.splice(index, 1);
    renderEvents();
}

// Placeholder function for scheduling email reminders
function scheduleEmailReminder(name, date) {
    const eventDate = new Date(date);
    const now = new Date();

    const timeUntilReminder = eventDate - now - 24 * 60 * 60 * 1000; // 1 day before

    if (timeUntilReminder > 0) {
        setTimeout(() => {
            alert(`Reminder: The event "${name}" is scheduled for tomorrow.`);
        }, timeUntilReminder);
    }
}

// Render initial events
renderEvents();
