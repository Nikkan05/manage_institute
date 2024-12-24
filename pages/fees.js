// Simulated fee data for students
const feeData = {
    STU123: { status: "pending" },
    STU124: { status: "clear" },
    STU125: { status: "pending" },
};

function checkFeeStatus() {
    const studentId = document.getElementById("studentId").value.trim().toUpperCase();
    const statusSection = document.getElementById("feeStatus");
    const statusMessage = document.getElementById("statusMessage");
    const payButton = document.getElementById("payButton");

    if (!studentId) {
        alert("Please enter a valid Student ID.");
        return;
    }

    const student = feeData[studentId];

    if (!student) {
        statusSection.classList.remove("hidden");
        statusMessage.textContent = `No record found for Student ID: ${studentId}`;
        payButton.classList.add("hidden");
        return;
    }

    statusSection.classList.remove("hidden");

    if (student.status === "clear") {
        statusMessage.textContent = `Fees are clear for Student ID: ${studentId}.`;
        payButton.classList.add("hidden");
    } else {
        statusMessage.textContent = `Fees are pending for Student ID: ${studentId}.`;
        payButton.classList.remove("hidden");
    }
}

function payFees() {
    const studentId = document.getElementById("studentId").value.trim().toUpperCase();

    if (feeData[studentId]) {
        feeData[studentId].status = "clear";
        alert(`Payment successful for Student ID: ${studentId}.`);
        checkFeeStatus(); // Recheck fee status to update the UI
    } else {
        alert("Error: Student ID not found.");
    }
}


document.getElementById('payFeesBtn').addEventListener('click', async () => {
    const studentId = document.getElementById('studentIdInput').value;
    
    try {
        const response = await fetch('/api/fees/pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentId }),
        });
        
        if (response.ok) {
            const data = await response.json();
            alert(data.message);
            document.getElementById('feesStatus').innerText = 'Fees Status: Paid';
        } else {
            alert('Failed to update fees. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
