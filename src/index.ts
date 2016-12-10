import * as console from 'console';
import { Greeter } from './greeter';
import { Student } from './student';

let testStudent = new Student('John', 'A', 'Stephenson');

let greeting = Greeter.greet(testStudent);

console.log(greeting);
