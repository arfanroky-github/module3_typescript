type StudentType = {
  name: string;
  age: number;
  address: string;
};

type TeacherType = StudentType & {
  designation: string;
};

// parent class
class Person {
  constructor(private parameters: StudentType) {}

  makeSleep(hours: number): string {
    return `This ${this.parameters.name} will sleep for ${hours}`;
  }
}

// student
class Student extends Person {
  constructor(private props: StudentType) {
    super({
      name: props.name,
      address: props.address,
      age: props.age,
    });
  }
}

// teacher
class Teacher extends Person {
  constructor(public props: TeacherType) {
    super({ name: props.name, age: props.age, address: props.address });
  }
  takeClasses(subject: number): string {
    return `This ${this.props.name} will take ${subject} class`;
  }
}

const Student1 = new Student({
  name: "arfan",
  age: 21,
  address: "jashore",
});

// Student

const Teacher1 = new Teacher({
  name: "Riaz",
  age: 34,
  address: "jashore",
  designation: "",
});


Teacher1