import { OmitType } from '@nestjs/swagger';
import { CreateProductDto } from '../../product/dtos/create-product.dto';

export class ProductDto extends OmitType(CreateProductDto, ['salePrice']) {}