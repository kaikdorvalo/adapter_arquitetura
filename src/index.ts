import { PersonCSVAdapter } from "./model/PersonCSVAdapter";
import { PersonsRepository } from "./repository/PersonsRepository";

async function main() {
    const repository: PersonsRepository = new PersonCSVAdapter("src/csv/pessoas.csv");
    const persons = await repository.listPersons();

    persons.forEach((p) => {
        console.log(p.toText());
    });
}

main();