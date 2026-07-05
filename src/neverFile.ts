function throwError(message: string): never{
    throw new Error(message);
}
// throwError("404 error")

function greet():void{
    console.log("hello");
    
}
const result = greet();
console.log(result);
