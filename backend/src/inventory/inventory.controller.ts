import { Controller, Get } from '@nestjs/common';
import { Inventory } from './inventory.interface';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    getAllInventory(): Promise<Inventory[]> {
        return this.inventoryService.getAllInventory()
    }


}
