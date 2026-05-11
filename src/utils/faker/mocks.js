import { faker } from "@faker-js/faker";
import { createHash } from "../index.js";

/**
 * @description Crea un usuario mock para probar la api
 * @param {Number} quantity 
 * @returns {Array<User>}
 */
export async function createUsers(quantity) {
    /**
     * @type {Array<User>}
     */
    const mockUsers = [];

    for (let i = 0; i < quantity; i++) {
        const user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: await createHash("coder123"),
            role: faker.helpers.arrayElement(["user", "admin"]),
            pets: []
        }
        mockUsers.push(user);
    }

    return mockUsers;
}

export function createPets(quantity) {
    const mockPets = [];

    for (let i = 0; i < quantity; i++) {
        const pet = {
            name: faker.animal.petName(),
            specie: faker.animal.type(),
            birthDate: faker.date.birthdate(),
            adopted: false,
            owner: "",
            image: faker.image.avatar()
        }
        mockPets.push(pet);
    }

    return mockPets;
}