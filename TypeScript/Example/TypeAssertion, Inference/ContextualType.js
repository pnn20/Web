"use strict";
var tonio = {
    name: 'Tonio',
    age: 26
};
var toniosCat = {
    name: 'Nala',
    animal_type: 'cat'
};
function printTypeIfAnimalHumanOtherwise_incorrect_bis(toBePrinted) {
    console.log(toBePrinted.animal_type);
}
printTypeIfAnimalHumanOtherwise_incorrect_bis(tonio);
printTypeIfAnimalHumanOtherwise_incorrect_bis(toniosCat);
