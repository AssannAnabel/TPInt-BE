import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Inventory } from './inventory.interface';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    getAllInventory(): Promise<Inventory[]> {
        return this.inventoryService.getAllInventory()
    }

    @Get()
    getInvtryById(@Param('id') id: number): Promise<Inventory> {
        return this.inventoryService.getInvtryById(id)
    }

    @Post()
    addInvtry(@Body() invtry: Inventory): Promise<Inventory> {
        return this.inventoryService.addInvtry(invtry)
    }

}
