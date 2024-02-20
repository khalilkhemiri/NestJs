// product.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from 'src/services/product/product.service';
import { CreateProductDto, UpdateProductDto } from 'src/models/product.dto';
import { Product } from 'src/models/Product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  async findAllProducts(): Promise<Product[]> {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  async findProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.findProductById(id);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.deleteProduct(id);
  }
}