import { IsInt, IsString, IsNumber, IsNotEmpty } from "class-validator";
import {Expose} from 'class-transformer'

export class InventoryDto {
    @Expose()
    @IsString()
    @IsNotEmpty()
    code: string;
    
    @IsString()
    product: string;
    
    @IsString()
    description: string;
    
    @IsNumber()
    price: number;
    
    @IsString()
    item: string;
    
    @IsInt()
    qty: number;
    
    @IsString()
    images: string;
}