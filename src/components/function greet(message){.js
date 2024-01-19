function greet(message){
    console.log(`${message},${this.name}`);
}
const person={name:REshma};
greet.call 