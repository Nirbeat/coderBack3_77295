// IMPORTAMOS FAKER
import { faker } from "@faker-js/faker";

// CREAMOS FUNCION PARA GENERAR PRODUCTOS
function generateProducts() {
    const products = [];
    const randomNumber = faker.number.int({ min: 1, max: 5 });

    for (let i = 0; i < randomNumber; i++) {
        products.push({
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price()
        });
    }

    return products;
}
// CREAMOS FUNCION PARA GENERAR USUARIOS CON PRODUCTOS
export function generateUsers() {
    return {
        _id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.helpers.arrayElement(["admin", "user"]),
        profile_image: faker.image.avatarGitHub(),
        cart: generateProducts()
    }
}