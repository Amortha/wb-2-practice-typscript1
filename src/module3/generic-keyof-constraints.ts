// type presonType= {
//     name:string;
//     age:number;
//     address:string;
// };
// type newType = 'name' | 'age' | 'address' //manully korci
// type newTypeUsingKeyof = keyof presonType

// // const a:newType="age"
// // const b:newTypeUsingKeyof='name'

// function getProperty<X,Y extends keyof X>(obj:X, key:Y){
// obj[key]
// }
// const property = getProperty({name:"Mr.x", age:100},"age");


// // {{name:'Mr.x, age:100'},'age'}
// // const a={
// //     name: 'mr.x',age:100
// // }
// // a['age']
