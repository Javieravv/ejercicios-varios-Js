console.clear()
console.log('Grading Students')

const gradingStudents = (grades) => {
    let notesGrades = []
    let multipleFive = 0;
    let failingGrade = 38;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < failingGrade) {
            notesGrades.push(grades[i]);
        } else {
            (grades[i] % 5 === 0)
                ? multipleFive = grades[i]
                : multipleFive = (5 - grades[i] % 5) + grades[i];
            (multipleFive - grades[i] < 3)
                ? notesGrades.push(multipleFive)
                : notesGrades.push(grades[i])
        }
    }
    return notesGrades;
}

console.log(gradingStudents([73, 67, 38, 33]))
console.log(gradingStudents([25, 45, 35, 23, 28]))
console.log(gradingStudents([37, 39, 42, 72, 85, 95, 15]))
