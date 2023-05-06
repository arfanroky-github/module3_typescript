//  key of guard

type Alphanenumeric = string | number;

function add(num1: Alphanenumeric, param: Alphanenumeric): Alphanenumeric {
  if (typeof param === "number" && typeof num1 === "number") {
    return num1 + param;
  } else {
    return num1.toString() + param.toString();
  }
}

// console.log(add(1, "2"));
// console.log(add(1, 3));

type NormalUserType = {
  name: string;
};

type AdminUserType = NormalUserType & {
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an admin and my role is ${user.role}`;
  } else {
    return `I am a normal user`;
  }
}

const normalUser1: NormalUserType = {
  name: "Arfan ",
};

const adminUser1: AdminUserType = {
  name: "billu",
  role: "admin",
};

const result1 = getUser(normalUser1);
const result2 = getUser(adminUser1);
// console.log(result1, result1);

// instaceof guard

class Animals {
  constructor(public name: string, public species: string) {}

  make_sound() {
    console.log(`I'm making a sound `);
  }
}

class Dog extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }

  make_bark() {
    console.log(`i'm barking`);
  }
}

class Cat extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }

  make_meaw() {
    console.log(`i'm meawing`);
  }
}

function isDog(animal: Animals): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animals): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animals) {
  if (isDog(animal)) {
    animal.make_bark();
  } else if (isCat(animal)) {
    animal.make_meaw();
  } else {
    animal.make_sound();
  }
}

const animal1 = new Dog("German", "Dog");
const animal2 = new Cat("Persian", "cat");

getAnimal(animal2);
