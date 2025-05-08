import { Person } from "../model/Person"

export interface PersonsRepository {
    listPersons(): Promise<Person[]>;
}