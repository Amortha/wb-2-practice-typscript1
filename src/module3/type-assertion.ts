// let emni: any;

// emni = "Next level web devlopment";

// (emni as string).length;
// <string>emni.length;

// function kgToGram(param: string | number): string | number | undefined
//  {
//     if (typeof param === "string") {
//         const value = parseFloat(param)* 1000;
//         return `the converted result is: ${value} gram`;
//     }
//     if(typeof param === "number"){
//         const value = param * 1000;
//         return value;
//     }
// }

// const resultToBeNumber = <number>kgToGram(1000) as number;
//  const resultToBeString = <string>kgToGram("1000") as string;

//  type CustomErrorType={
//     message:string
//  }
//  try{

//  }catch(err){
//     console.log((err as CustomErrorType).message);
//  }