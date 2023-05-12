"use strict";
// // a type is dependent on another type
// type a1 = null;
// type a3 = undefined;
// type a4 = number
// type a2 = a1 extends string ? string : null
// //nested conditional type
// type d = a1 extends null 
// ? null 
// : a3 extends number 
// ? number 
// : a4 extends null 
// ? null 
// : never;
// type sheikh = {
//     wife1: string;
//     wife2: string;
// }
// type A = keyof sheikh; //'wife1 | 'wife2'
// type CheckProterty<T ,K> = K extends keyof sheikh ? true : false;
// type CheckProterty1 = CheckProterty<sheikh,'girlfriend'>;
// //chack korba ei sheikh type a wife2 are kina ? true : false
// // matha kharap Example
// type Bandubi = "Monika"| 'Rachel' | 'pheobe'
// type RemoveBadhubi<T,K> = T extends K ? never : T
// type CurrentBandubi = RemoveBadhubi<Bandubi,"Monika">;
