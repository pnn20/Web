"use strict";
/*
interface Person {
    name: string,
    age: number
}

interface Animal {
    name: string,
    animal_type: 'cat' | 'dog'
}

type PersonOrAnimal = Person | Animal

const tonio: Person = {
    name: 'Tonio',
    age: 26
};

const toniosCat: Animal = {
    name: 'Nala',
    animal_type: 'cat'
};
*/
/*
// Example function
const printName = (toBePrint: PersonOrAnimal) => console.log(toBePrint.name);

const printTypeIfAnimalHumanOtherwise_incorrect = (toBePrinted: PersonOrAnimal) => {
    //  error TS2339: Property 'type' does not exist on type 'PersonOrAnimal'
    if(toBePrinted.type == Animal){
        console.log("animal")
    }
    else {
        console.log("person")
    }
}

const printTypeIfAnimalHumanOtherwise_incorrect_bis = (toBePrinted: PersonOrAnimal) => {
    //error TS2693: 'Animal' only refers to a type, but is being used as a value here.
    if(toBePrinted instanceof Animal){ //works with classes, but not with interfaces
      console.log("animal")
    }
    else {
      console.log("human")
    }
}
*/
/*
const printTypeIfAnimalHumanOtherwise_incorrect_bis = (toBePrinted: PersonOrAnimal) => {
    if ((toBePrinted as Animal).animal_type) {
        console.log("animal");
    } else {
        console.log("person")
    }

    if ((toBePrinted as Animal).animal_type == 'cat') {
        console.log("cat");
    } else if ((toBePrinted as Animal).animal_type == 'dog') {
        console.log("dog");
    }
    
    if (toBePrinted as Animal) {
        console.log("Type Assertion(Animal)")
    }
    
    if (toBePrinted as Person) {
        console.log("Type Assertion(Person)")
    }
}

printTypeIfAnimalHumanOtherwise_incorrect_bis(tonio);
printTypeIfAnimalHumanOtherwise_incorrect_bis(toniosCat);
*/ 
