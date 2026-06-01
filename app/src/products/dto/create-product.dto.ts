export class CreateProductDto {
    title: string;
    description: string;
    price: Number;
    category: string;
    stock: Number;
    status: boolean;
    code: string;
    thumbnails: Array<string>
}
