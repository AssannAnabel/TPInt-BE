import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { Inventory } from './inventory.interface';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    getAllInventory(): Promise<Inventory[]> {
        return this.inventoryService.getAllInventory()
    }

    @Get(':id')
    getInvtryById(@Param('id') id: number): Promise<Inventory> {
        return this.inventoryService.getInvtryById(id)
    }

    @Post()
    addInvtry(@Body() invtry: Inventory): Promise<Inventory> {
        return this.inventoryService.addInvtry(invtry)
    }

    @Delete(':id')
    deleteInvtryById(@Param('id') id: number): Promise<Inventory> {
        return this.inventoryService.deleteInvtryById(id)
    }

    @Put(':id')
    @HttpCode(204)
    updateInvtryById(@Param('id') id: number, @Body() body: Inventory): Promise<Inventory> {
        return this.inventoryService.updateInvtryById(id, body)
    }
}
