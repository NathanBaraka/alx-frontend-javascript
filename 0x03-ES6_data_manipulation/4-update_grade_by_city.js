export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter(student => student.location === city)
    .map(student => {
      const gradeRecord = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A',
      };
    });
}

