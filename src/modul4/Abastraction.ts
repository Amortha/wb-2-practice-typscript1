// // //interface

// // // interface IVehicle{
// // //     name:string;
// // //     model:string;
// // // }

// // // const vehicle: IVehicle ={
// // //     name:'car',
// // //     model: "200",
// // // }

// // interface IVehicle{
// //     startEngine(): void;
// //     stopEngine():void;
// //     move():void;
// // }

// // class vehicle implements IVehicle{
   
// //     constructor(
// //         public name: string,
// //         public brand : string,
// //         public model : number
// //     ){}

  
// //    startEngine(): void {
// //         console.log("i am starting engine...")
// //     }
// //     stopEngine(): void {
// //         console.log("i am syopping engine")
// //     }
// //     move(): void {
// //         console.log("i am syopping engine")
// //     }
// //     test(){
// //         console.log("i am for testing purpose")
// //     }
// // }

// // const vehicle1 = new vehicle('car','Toyota',2000)

// //abstract class

//  abstract class vehicle{
//     constructor(
//                 public name: string,
//                 public brand : string,
//                 public model : number
//             ){}
        
          
//           abstract  startEngine(): void 
//           abstract  stopEngine(): void 
//             move(): void {
//                 console.log("i am syopping engine")
//             }
           
// }
// class  Car extends vehicle{
//  startEngine(): void {
//      console.log('i am starting engine...')
//  }
//  stopEngine(): void {
//      console.log("I am starting engine...")
//  }
// }

// const car1 = new vehicle('car','Honda',2015)