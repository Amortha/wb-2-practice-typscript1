"use strict";
// const arrayofNumbers = [1,2,3]
// const arrayofStrings =arrayofNumbers.map((number) => number.toString());
// console.log(arrayofStrings)
// type valume ={
// height:number;
// width:number;
// depth:number;
// };
// type Area<T> ={
//     // [key in keyof valume]: valume[key];
//  readonly [key in keyof T]:T[key]
// };
// const  area1 :Area <{height:number,width:string }>={height:10,width:'10'}
// area1
// type AreaString = {
//  readonly height:String;
//  readonly width:String;
// };
// type  AreReadonly ={
//     height:number;
//     width:number
// }
// const rectangularArrea:  AreReadonly = {
//     height:10,
//     width:12,
// }
// rectangularArrea.width=10 
// type A= AreaNumber['height']//look of type
// type B =keyof AreaNumber; //'width' | 'height'
// // const obj={
// //     name:"persian"
// // }
// // obj['name']
