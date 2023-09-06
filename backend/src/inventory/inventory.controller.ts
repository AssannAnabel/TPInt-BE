import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode } from '@nestjs/common';
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
        return this.inventoryService.getInvtryById(id);
    }

    @Post()
    addInvtry(@Body() invtry: Inventory): Promise<Inventory> {
        return this.inventoryService.addInvtry(invtry);
    }

    // metodo delete es igual que el put, usa metodo 204 no_content
    // Indica que la eliminación se ha realizado con éxito, pero no se devuelve ningún contenido 
    //en el cuerpo de la respuesta. Esto es adecuado porque la eliminación en sí no 
    //requiere enviar el recurso eliminado de vuelta al cliente.
    @Delete(':id')
    @HttpCode(204)
    deleteInvtryById(@Param('id') id: number): Promise<any> {
        return this.inventoryService.deleteInvtryById(id);
    }

    //ok
    @Put(':id')
    @HttpCode(204)
    updateInvtryById(@Param('id') id: number, @Body() body: Inventory): Promise<Inventory> {
        return this.inventoryService.updateInvtryById(id, body);
    }
}
