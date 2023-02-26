function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(10, 20));

function intro(name: string, age: number): string {
  return name + " " + age;
}
console.log(intro("Galib", 18));

function logged(name: string): void {
  console.log(name);
}

logged("Asadullah Hil Galib");

function isTrue(age: number): boolean {
  return age > 30;
}

console.log(isTrue(33));

function anything(student: any): any {
  return student;
}

console.log(anything("Galib"));
