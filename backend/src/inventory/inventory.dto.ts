import { IsInt, IsString } from "class-validator";

export class InventoryDto {
    code: string;
    product: string;
    description: string;
    @IsInt()
    price: number;
    item: string;
    
    qty: number;
    images: string
}