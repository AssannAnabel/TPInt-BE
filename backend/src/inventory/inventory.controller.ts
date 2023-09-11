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
    async getInvtry(@Res() res): Promise<Inven_idDto[]> {
        try {
            const serviceRes = await this.inventoryService.getInvtry()
            return res.status(HttpStatus.OK).send(serviceRes);
        } catch (error) {
            throw new NotFoundException('data not found');
        }
    }

    @Get()
    async getAllInventory(@Query('item') item?: string): Promise<InventoryDto[]> {
        if (item) return await this.inventoryService.getInvtryByItem(item)
        throw new NotFoundException(`data not found`)
    }

    @Get(':id')
    async getInvtryById(@Param('id') id: number, @Res() res): Promise<InventoryDto> {
        try {
            const serviceRes = await this.inventoryService.getInvtryById(id);
            if (Object.keys(serviceRes).length) {
                return res.status(HttpStatus.OK).json(serviceRes);
            }
            else { return res.status(HttpStatus.NOT_FOUND).json({ message: `registration ${id} does not exist`, error: 404 }) }
        } catch (error) {
            throw new NotFoundException(`Cannot get inventory with id ${id}`);
        }
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createInvtry(@Body() invtry: InventoryDto, @Res() res): Promise<InventoryDto> {
        try {
            const serviceRes = await this.inventoryService.createInvtry(invtry)
            return res.status(HttpStatus.CREATED).send(serviceRes)
        } catch (error) {
            throw new BadRequestException('inventory creation failed')
        }
    }

    @Delete(':id')
    async deleteInvtryById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Res() res,): Promise<InventoryDto> {
        try {
            const serviceRes = await this.inventoryService.deleteInvtryById(id);
            if (serviceRes) {
                return res.status(HttpStatus.OK).send({ message: 'Deleted record' });
            }
        } catch (error) {
            throw new NotFoundException('Delete failed');
        }
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateInvtryById(@Param('id') id: number, @Body() body: InventoryDto, @Res() res: Response): Promise<Response<InventoryDto>> {
        try {
            const serviceRes = await this.inventoryService.updateInvtryById(id, body);
            console.log(Object.keys(serviceRes).length);
            if (Object.keys(serviceRes).length) {
                return res.status(HttpStatus.ACCEPTED).send({ message: `Registry  ${id} successfully modified.` })
            } else {
                return res.status(HttpStatus.NOT_FOUND).json({ message: `Register  ${id} does not`, error: 404 })
            }
        } catch (error) {
            throw new BadRequestException(`Update failed`);
        }
    }
}