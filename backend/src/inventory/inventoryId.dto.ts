import { IsInt, IsString, IsNumber, IsNotEmpty } from 'class-validator'  //isNotEmpty que no llegue vacio
import { Expose } from 'class-transformer'

export class Inven_idDto {
    @Expose()
    @IsInt()
    @IsNotEmpty()
    id: number;

    @Expose()
    @IsString()
    @IsNotEmpty()
    code: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    product: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    description: string;

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    price: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    item: string;

    @Expose()
    @IsInt()
    @IsNotEmpty()
    qty: string;

    @IsString()
    //@IsNotEmpty()
    //@Expose()
    images: string;
}