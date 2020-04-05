class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
  
  // Error: indexing with a numeric string might get you a completely separate type of Animal!
  interface NotOkay {
    [x: string]: Animal;
    [x: number]: Dog;
  }

  let adog = new Dog();
  adog.breed = "dog breed";
  adog.name = "some dog name";
  let animal = new Animal();
  animal.name = "some animal name";


  //let animals : NotOkay = [ adog, animal];

  //let a = animals[1];
  //console.log(a.name);