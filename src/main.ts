import * as process from 'process'
import {x} from './to_export'

let y = x + 12

export type Optional<T> = {
     [K in keyof T]? : T[K]; 
}

type Something = {
    field: string
}

type Dictionary<T> = {
    [key: string]: T
}

export type ReadOnly<T> = {
    readonly [K in keyof T] : T[K]; 
}

class Department {

    name: string;
    age?: number;

    constructor(name: string) {
        this.name = name;
    }

    other: (this: Department) => void = () => {
        console.log("Print");
        console.log(this.name);
    }

    print(this: Department): void {
        console.log("Print");
        console.log(this.name);
    }
}


let main: (args: string[]) => void = (args: string[]) => {
    
    let some: Something = {
        field: "something"
    }

    let array = [1, 4, 5, 6, "123123"]

    let cacheCounter = counterWrapper();

    console.log(cacheCounter(10));
    console.log(cacheCounter(20));
    console.log(cacheCounter(2));

    console.log('Args');
    console.log(args);
}

const counterWrapper: () => (acc: number) => number = () => {
    console.log("Fist Execution counterWrapper")
    let count = 0;
    return (accumulator: number): number => {
        console.log("Annonimys function")
        count + accumulator;
        return count;
    }
}

main(process.argv);