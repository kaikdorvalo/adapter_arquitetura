export class Person {
    constructor(
        public name: string,
        public age: number,
        public email: string
    ) { }

    toText(): string {
        return `Pessoa = nome: ${this.name}, idade: ${this.age}, email: ${this.email}`;
    }
}