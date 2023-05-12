// // typeof guard
// type Alphanumberics= string | number

// function add(param1:Alphanumberics,param2:Alphanumberics):Alphanumberics {
//     if(typeof param1 == 'number' && typeof param2 =='number'){
//         return param1+param2
//     }else{
//         return param1.toString()+param2.toString
//     }
// }
// add('1','2')
// add(1,2)
// //in gard

// type NormalUserType={
//     name:string
// }
// type AdminUserType={
//     name:string;
//     role:'admin'
// };

// function getUser(user:NormalUserType|AdminUserType ){
// if ('role' in user){
//     return `i am an admin and my role is ${user.role}`
// }
// else{
//     return `i am a normal user`
// }

// }
// const normalUser: NormalUserType={name:'Mr.kallu'};
// const adminUser1:AdminUserType ={name:'Mr.Gallu',role:'admin'};

// console.log(getUser(normalUser))
// console.log(getUser(adminUser1))

// //instaceof guard
// class Animal {
//     name:string;
//     species: string;
//     constructor(name:string,species:string){
//         this.name= name
//         this.species=species
//     }
//     makeSound(){
//         console.log('i am making')
//     }
// }
// class Dog extends Animal {
//     constructor(name:string,species:string){
//         super(name,species);
//     }

// makeBark(){
//     console.log('i am barking')
// }
// }
// class Cat extends Animal {
//     constructor(name:string,species:string){
//         super(name,species);
//     }

// makeMeaw(){
//     console.log("i am Mewing")
// }
// }

// function isDog(animal:Animal):animal is Dog{
//     return animal instanceof Dog
// }
// function isCat(animal:Animal):animal is Cat{
//     return animal instanceof Cat
// }

// function getAnimal(animal:Animal){
// if(isDog(animal)){
// animal.makeBark()
// }
//  else if(isCat(animal)){
//     animal.makeSound
// }
// else{
//     animal.makeSound
// }
// }
// const animal1 = new Dog("german Bhi",'dog')  //instance -> Dog
// const animall2 = new Cat('persian Bhi','cat') //instance -> Cat
// getAnimal(animal1);