// type GenericTuple<x, y> = [x, y]

// const relation: GenericTuple<string, string> = ['parsian', 'kate winslet']


// // type RelationWithSalaryType=
// //     { name: string, salary: number }

// interface RelationWithSalaryInterface{
//     name:string;
//     salary:number
// }

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
//     {
//         name: "persian",
//         salary: 10000,
//     },
//     "kate Winslet",
// ];
// const relationWithSalary2: GenericTuple<
// RelationWithSalaryType,
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