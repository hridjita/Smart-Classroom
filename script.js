
function addStudent(){
let name = document.getElementById("name").value;

if(name.trim() === ""){
alert("Enter student name");
return;
}

let students = JSON.parse(localStorage.getItem("students")) || [];

students.push(name);

localStorage.setItem("students", JSON.stringify(students));

document.getElementById("name").value = "";

loadStudents();
updateDashboard();
}

function loadStudents(){
let list = document.getElementById("list");

if(!list) return;

let students = JSON.parse(localStorage.getItem("students")) || [];

list.innerHTML = "";

students.forEach((s, i)=>{
list.innerHTML += `<li>${i+1}. ${s}</li>`;
});
}

function updateDashboard(){
let students = JSON.parse(localStorage.getItem("students")) || [];

let count = document.getElementById("studentCount");

if(count){
count.innerText = students.length;
}
}

function markAttendance(){
let name = document.getElementById("attName").value;
let status = document.getElementById("status").value;

if(name.trim() === "" || status.trim() === ""){
alert("Enter both name and status");
return;
}

let data = JSON.parse(localStorage.getItem("attendance")) || [];

data.push({name, status});

localStorage.setItem("attendance", JSON.stringify(data));

document.getElementById("attName").value = "";
document.getElementById("status").value = "";

loadAttendance();
}

function loadAttendance(){
let box = document.getElementById("attList");

if(!box) return;

let data = JSON.parse(localStorage.getItem("attendance")) || [];

box.innerHTML = "";

data.forEach(d=>{
box.innerHTML += `<p>${d.name} - ${d.status}</p>`;
});
}

function addResult(){
let name = document.getElementById("rName").value;
let marks = document.getElementById("marks").value;

if(name.trim() === "" || marks.trim() === ""){
alert("Enter name and marks");
return;
}

let results = JSON.parse(localStorage.getItem("results")) || [];

let grade = getGrade(marks);

results.push({name, marks, grade});

localStorage.setItem("results", JSON.stringify(results));

document.getElementById("rName").value = "";
document.getElementById("marks").value = "";

loadResults();
}

function loadResults(){
let box = document.getElementById("resultList");

if(!box) return;

let results = JSON.parse(localStorage.getItem("results")) || [];

box.innerHTML = "";

results.forEach(r=>{
box.innerHTML += `
<p>
<b>${r.name}</b> - Marks: ${r.marks} - Grade: ${r.grade}
</p>`;
});
}

function getGrade(marks){
marks = Number(marks);

if(marks >= 80) return "A";
else if(marks >= 60) return "B";
else if(marks >= 40) return "C";
else return "F";
}

function addAnnouncement(){
let text = document.getElementById("aText").value;

if(text.trim() === ""){
alert("Write announcement");
return;
}

let announcements = JSON.parse(localStorage.getItem("announcements")) || [];

announcements.push(text);

localStorage.setItem("announcements", JSON.stringify(announcements));

document.getElementById("aText").value = "";

loadAnnouncements();
}

function loadAnnouncements(){
let box = document.getElementById("announcementList");

if(!box) return;

let announcements = JSON.parse(localStorage.getItem("announcements")) || [];

box.innerHTML = "";

announcements.forEach((a, i)=>{
box.innerHTML += `
<p><b>${i+1}.</b> ${a}</p>
`;
});
}
window.onload = function(){
loadStudents();
updateDashboard();
loadAttendance();
loadResults();
loadAnnouncements();
};