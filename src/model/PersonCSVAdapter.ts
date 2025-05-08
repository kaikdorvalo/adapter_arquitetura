import { PersonsRepository } from "../repository/PersonsRepository";
import { Person } from "./Person";
import * as fs from "fs";
import * as readline from "readline";

export class PersonCSVAdapter implements PersonsRepository {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    async listPersons(): Promise<Person[]> {
        const persons: Person[] = [];

        const fileStream = fs.createReadStream(this.filePath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });

        let firts = true;
        for await (const linha of rl) {
            if (firts) {
                firts = false;
                continue;
            }

            const [name, age, email] = linha.split(",");

            if (name && !isNaN(parseInt(age)) && email) {
                persons.push(new Person(name, parseInt(age), email));
            }
        }

        return persons;
    }
}