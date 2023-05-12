// //Generic interface

// interface CrushInterface<T, U = null> {
//     name: string;
//     husband: T;
//     wife?: U;
// }

// interface personInterface{
//     name:string,
//     age:number,
// }

// const crush4: CrushInterface<
// personInterface,
// personInterface 

// > = {
//     name: "kate",
//     husband: {
//         name: "persian",
//         age: 30,
//     },
//     wife: {
//         name: "winslet",
//         age: 40
//     }
// }

// const crush1: CrushInterface<boolean, string> = {
//     name: "kate winslet",
//     husband: true,
//     wife: "chondrika",
// };

// const crush2: CrushInterface<string> = {
//     name: "kate Winslet",
//     husband: "persian",
// }

// interface HusbandInterface {
//     name: string;
//     salary: number;
// }
// const crush3: CrushInterface<HusbandInterface> = {
//     name: "kate winslet",
//     husband: {
//         name: "persion",
//         salary: 0.01,
//     }
// }
// type GenericTuple<x, y> = [x, y]

// const relation: GenericTuple<string, string> = ['parsian', 'kate winslet']


// // type RelationWithSalaryType=
// //     { name: string, salary: number }

// interface RelationWithSalaryInterface {
//     name: string;
//     salary: number
// }

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
//     {
//         name: "persian",
//         salary: 10000,
//     },
//     "kate Winslet",
// ];
// const relationWithSalary2: GenericTuple<
//     RelationWithSalaryType,
//     string
// > = [
//         {
//             name: "persian",
//             salary: 10000,
//         },
//         "kate Winslet",
//     ];
// type GenericArray<T> = Array<T>




// const rollNumbers: GenericArray<number> = [44, 12, 4];
// const rollNumbers2: GenericArray<string> = ["44", "12", "4"]
// const rollNumbers3: GenericArray<boolean> = [true, false];

// type NameRollType = { name: string; roll: number }

// const userNameAndRollNumbers: GenericArray<NameRollType> = [
//     {
//         name: "mr.x",
//         roll: 1,
//     },
//     {
//         name: "Mr.y",
//         roll: 2,
//     }
// ]