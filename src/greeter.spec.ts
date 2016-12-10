import { Student } from './student';
import { Greeter } from './greeter';

describe('Greeter', () => {
  it('should have a well formed greeting message', () => {
    let testStudent = new Student('John', 'A', 'Stephenson');

    let greeting = Greeter.greet(testStudent);

    expect(greeting).toEqual('Hello, John Stephenson');
  });
});
