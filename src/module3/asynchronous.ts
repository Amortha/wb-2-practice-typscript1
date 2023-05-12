// //Mocking
// //json place Holder
// interface ITodo  {
//     userI:number;
//     Id:number;
//     title:string;
//     completed:boolean;

// }


// const getTodo = async (): Promise<ITodo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     return await response.json();

// }
// const getTodoData=async ():Promise<void> =>{
//     const result = await getTodo()
//     console.log(result);
// }

// getTodoData();

// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resloved, rejact) => {
//         const data: string = "Data is fetched"
//         if (data) {
//             resloved(data)
//         }
//         else {
//             rejact('Faild to feted data!');
//         }
//     })
// }

// interface DataType {
//     data: string
// }

// const makePromiseObject = (): Promise<DataType> => {
//     return new Promise<DataType>((resloved, rejact) => {
//         const data: DataType = { data: "Data is fetched" }
//         if (data) {
//             resloved(data)
//         }
//         else {
//             rejact('Faild to feted data!');
//         }
//     })
// }
// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resloved, rejact) => {
//         const data: boolean = true;
//         if (data) {
//             resloved(data)
//         }
//         else {
//             rejact('Faild to feted data!');
//         }
//     })
// }
// const getPromisData = async (): Promise<string> => {
//     const data = await makePromise();
//     return data
// };
// const getPromisObject = async (): Promise<DataType> => {
//     const data = await makePromiseObject();
//     return data
// };
// const getPromisDataBoolean = async (): Promise<boolean> => {
//     const data = await makePromiseBoolean();
//     return data;
// };