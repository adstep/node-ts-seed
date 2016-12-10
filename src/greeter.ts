import { IPerson } from './iPerson';

export class Greeter {
  static greet(person: IPerson): string {
    return `Hello, ${person.firstName} ${person.lastName}`;
  }
}
