class Animal {
  //   Parameter properties
  constructor(
    public name: string,
    private species: string,
    private sound: string
  ) {
  }

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shapard", "dog", "ghew");
const cat = new Animal("persian", "cat", "meaw meaw");
dog.makeSound();
cat.makeSound();

