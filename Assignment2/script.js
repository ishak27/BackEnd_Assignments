
//Task 1 – Add a Student (push)
const students = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

students.push({
  id: 106,
  name: "Simran",
  marks: 91,
  course: "Java"
});

console.log(students);

//Task 2 – Remove Last Student (pop)
let lastStudent = students.pop();
console.log(lastStudent);

//Task 3 – Add Student at Beginning (unshift)
students.unshift({id:100, name:"Ankit", marks:80, course:"Web"});
console.log(students);

//Task 4 – Remove First Student (shift)
let firstRemove = students.shift();
console.log(firstRemove);

//Task 5 – Update Array Using splice()
let index = students.findIndex((student) =>{
  return  student.id === 103});

students.splice(index, 1,{id:107, name:"Karan", marks:78, course:"Java"});
console.log(students);

//Task 6 – Create a New Array Using slice()
let firstThree = students.slice(0, 3);
console.log(firstThree);

//Task 7 – Array Iteration (for...of)
for (let student of students) {
  console.log(`${student.name} - ${student.course} - ${student.marks}`);
}

//Task 8 – forEach()
students.forEach(student => {
  console.log(student.name);
});

//Task 9 – map()
let names = students.map((student) =>{
  return student.name});
console.log(names);

//Task 10 – filter()

let topperStudents = students.filter((student) => {
  return student.marks >= 80});
console.log(topperStudents);

//Task 11 – reduce()

let totalMarks = students.reduce((sum,student) =>{
  return sum + student.marks;}, 0);
let averageMarks = totalMarks/students.length;
console.log("Total Marks =",totalMarks);
console.log("Average Marks =",averageMarks);

//Task 12 – sort()
students.sort((a,b) => {
  return a.marks - b.marks});
console.log("Ascending Order: ");
console.log(students);


students.sort((a,b) => {
  return b.marks - a.marks});
console.log("Descending Order: ");
console.log(students);