class Man {
  takeNap(): void {
    console.log("I am sleeping 8 hours per day");
  }
}

class BoyStudent extends Man {
  takeNap(): void {
    console.log("I am sleeping 10 hours per day");
  }
}

class Developer extends Man {
  takeNap(): void {
    console.log(`I'm sleeping 6 hours per day`);
  }
}

function getNap(param: Man) {
  param.takeNap();
}

const person_one = new Man();
const person_two = new BoyStudent();
const person_three = new Developer();

getNap(person_one);
getNap(person_two);
getNap(person_three);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
      return this.width * this.height;
  }
}


function getAreaOfShape(param:Shape){
    console.log(param.getArea());
}


getAreaOfShape(new Shape());
getAreaOfShape(new Circle(3))
getAreaOfShape(new Rectangle(2, 3))
