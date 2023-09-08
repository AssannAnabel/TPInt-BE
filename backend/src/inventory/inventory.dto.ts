import { IsInt, IsString, IsNumber } from "class-validator";

export class InventoryDto {
    @IsString()
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