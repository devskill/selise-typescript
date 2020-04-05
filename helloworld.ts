let message: string = 'Hello World';
console.log(message)

let x : Array<[any, any]> = [ [1, 'hello'], [2, 'world']];

for(let i of x)
{
    console.log(i[1]);
}