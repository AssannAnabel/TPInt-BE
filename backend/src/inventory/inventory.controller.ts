import {
    Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus, NotFoundException, BadRequestException, ValidationPipe,
    UsePipes, ParseIntPipe, Query
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
//import {Inventory} from './inventory.interface';
import { Response } from 'express';
import { InventoryDto } from './inventory.dto';
import { Inven_idDto } from './inventoryId.dto';



@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    async getInvtry(@Res() res, @Query('item') item?: string): Promise<Inven_idDto[]> {
        try {
            if (item) {
                const serviceRes = await this.inventoryService.getInvtryByItem(item);
                if (serviceRes) return res.status(HttpStatus.OK).send(serviceRes);
            } else {
                const serviceRes = await this.inventoryService.getInvtry()
                return res.status(HttpStatus.OK).send(serviceRes);
            }
        } catch (err) {
            throw res.status(HttpStatus.NOT_FOUND).json({ message: `Couldn't found ${item} at inventory`, statusCode: 404 })
        }
    }

    @Get(':id')
    async getInvtryById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Res() res): Promise<InventoryDto> {
        try {
            const serviceRes = await this.inventoryService.getInvtryById(id);
            if (Object.keys(serviceRes).length) {
                return res.status(HttpStatus.OK).json(serviceRes);
            }
            else { return res.status(HttpStatus.NOT_FOUND).json({ message: `registration ${id} does not exist`, statusCode: 404 }) }
        } catch (err) {
            throw new NotFoundException(`Cannot get inventory with id ${id}`);
        }
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createInvtry(@Body() invtry: InventoryDto, @Res() res): Promise<InventoryDto> {
        try {
            const serviceRes = await this.inventoryService.createInvtry(invtry)
            if (serviceRes) return res.status(HttpStatus.CREATED).send(serviceRes)
        } catch (err) {
            throw new BadRequestException('inventory creation failed')
        }
    }

    @Delete(':id')
    async deleteInvtryById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Res() res,): Promise<InventoryDto> {
        try {
            const serviceRes = await this.inventoryService.deleteInvtryById(id);
            if (serviceRes) return res.status(HttpStatus.OK).send({ message: 'Deleted record', statusCode: 200 });
        } catch (err) {
            throw res.status(HttpStatus.NOT_FOUND).json({ message: `registration ${id} does not exist`, statusCode: 404 })
        }
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateInvtryById(@Param('id') id: number, @Body() body: InventoryDto, @Res() res: Response): Promise<Response<InventoryDto>> {
        try {
            const serviceRes = await this.inventoryService.updateInvtryById(id, body);
            console.log(Object.keys(serviceRes).length);
            if (Object.keys(serviceRes).length) {
                return res.status(HttpStatus.ACCEPTED).send({ message: `Registry  ${id} successfully modified.`, statusCode: 202 })
            } else {
                return res.status(HttpStatus.NOT_FOUND).json({ message: `registration ${id} does not exist`, statusCode: 404 })
            }
        } catch (err) {
            throw new BadRequestException(`Update failed`);
        }
    }
}