let person = {
    name: 'John',
    age: 30,

    greeting :()=> {
        console.log(`Hi! I am ${this.name} and I'm ${this.age}.`);
    },
};
// Call the greeting method of person object
person.greeting();



