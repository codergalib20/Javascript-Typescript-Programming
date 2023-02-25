function printPerson(student: {
  first_name: string;
  last_name: string;
  className: number;
  regular: boolean;
}): void {
  console.log(
    `${student.first_name} ${student.last_name} is read in ${
      student.className
    } He is ${student.regular ? "a regular" : "not a regular"} student`
  );
}
printPerson({
  first_name: "Asadullah",
  last_name: "Galib",
  className: 10,
  regular: true,
});
