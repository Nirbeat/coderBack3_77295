import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  products: Array<Product>;
  constructor() {
    this.products = [
      {
        "title": "Monitor Gamer 24\"",
        "description": "Monitor LED Full HD 144Hz",
        "price": 25000,
        "category": "tecnologia",
        "stock": 10,
        "status": true,
        "code": "tec001",
        "thumbnails": []
      },
      {
        "title": "Teclado Mecánico RGB",
        "description": "Teclado switches blue con retroiluminación",
        "price": 8500,
        "category": "tecnologia",
        "stock": 15,
        "status": true,
        "code": "tec002",
        "thumbnails": []
      },
      {
        "title": "Mouse Gamer Pro",
        "description": "Mouse óptico 16000 DPI",
        "price": 4500,
        "category": "tecnologia",
        "stock": 20,
        "status": true,
        "code": "tec003",
        "thumbnails": []
      },
      {
        "title": "Auriculares HyperX",
        "description": "Auriculares con sonido surround 7.1",
        "price": 12000,
        "category": "tecnologia",
        "stock": 8,
        "status": true,
        "code": "tec004",
        "thumbnails": []
      }
    ]
  }

  create(createProductDto: CreateProductDto) {
    this.products.push(createProductDto)
    return { message: 'success', createProductDto }
  }

  findAll(): Array<Product> {
    return this.products;
  }

  findOne(code: string) {
    return this.products.find(product => product.code == code);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
