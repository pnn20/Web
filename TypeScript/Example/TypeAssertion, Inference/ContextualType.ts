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

function printTypeIfAnimalHumanOtherwise_incorrect_bis(toBePrinted : PersonOrAnimal) {
    //console.log(toBePrinted.animal_type);
}

printTypeIfAnimalHumanOtherwise_incorrect_bis(tonio);
printTypeIfAnimalHumanOtherwise_incorrect_bis(toniosCat);
