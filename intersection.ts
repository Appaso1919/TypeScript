// type personTA={name:string}
// type personTB={age:number}
// type personTC=personTA & personTB

interface personTA{name:string}
interface personTB{age:number}
type personTC=personTA & personTB

var PersonDataA:  personTA = { name: 'Anil sidhu' }
var PersonDataB: personTB={ age: 30 };

var PersonDataC: { name: string, age: 30 } =
{
    name: 'Sidhu', age: 30
}