export const Person = {
    name: " John doe",
    age: 25,
  
    introduce() {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    },
  
    haveBirthday() {
      this.age += 1;
      return `Happy Birthday ${this.name}! You are now ${this.age} years old.`;
    },
  };
  