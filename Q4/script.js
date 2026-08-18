// User-defined function
function calculateGrade() {

    // Variables and Data Types
    let studentName = document.getElementById("studentName").value;

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);
    let mark4 = Number(document.getElementById("mark4").value);
    let mark5 = Number(document.getElementById("mark5").value);

    // Validation
    if (
        studentName === "" ||
        isNaN(mark1) ||
        isNaN(mark2) ||
        isNaN(mark3) ||
        isNaN(mark4) ||
        isNaN(mark5)
    ) {
        alert("Please enter all details.");
        return;
    }

    // Operators - Addition
    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    // Arithmetic operator
    let average = total / 5;

    // Selection statement
    let grade;

    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Pass/Fail calculation
    let status;

    if (
        mark1 >= 35 &&
        mark2 >= 35 &&
        mark3 >= 35 &&
        mark4 >= 35 &&
        mark5 >= 35
    ) {
        status = "PASS";
    }
    else {
        status = "FAIL";
    }

    // Store result
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("total", total);
    localStorage.setItem("average", average.toFixed(2));
    localStorage.setItem("grade", grade);
    localStorage.setItem("status", status);

    // Move to result page
    window.location.href = "result.html";
}


// Display result on result page
if (document.getElementById("resultName")) {

    document.getElementById("resultName").innerHTML =
        localStorage.getItem("studentName");

    document.getElementById("total").innerHTML =
        localStorage.getItem("total");

    document.getElementById("average").innerHTML =
        localStorage.getItem("average");

    document.getElementById("grade").innerHTML =
        localStorage.getItem("grade");

    document.getElementById("status").innerHTML =
        localStorage.getItem("status");
}