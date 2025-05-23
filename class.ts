// Basic Class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const p1 = new Person("Appaso", 22);
p1.greet();


//Inheritence
class Animal {
  move(): void {
    console.log("Animal is moving");
  }
}
class Dog extends Animal {
  bark(): void {
    console.log("Dog is barking");
  }
}
const d = new Dog();
d.move(); // from Animal
d.bark(); // from Dog


//class with interface
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log("Log:", message);
  }
}

const logger = new ConsoleLogger();
logger.log("Hello from interface-based class!");
