import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, ParseIntPipe, HttpStatus, Query } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryDto } from './inventory.dto';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    getAllInventory(@Query('item') item?: string): Promise<any[]> {
        if (!item) return this.inventoryService.getAllInventory();
        return this.inventoryService.getInvtryByItem(item)
    }

    @Get(':id')
    getInvtryById(
        @Param('id', new ParseIntPipe({
            errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
        })) id: number): Promise<any> {
        return this.inventoryService.getInvtryById(id);
    }

    @Post()
    addInvtry(@Body() invtryDto: InventoryDto): Promise<any> {
        return this.inventoryService.addInvtry(invtryDto);
    }

    // metodo delete es igual que el put, usa metodo 204 no_content
    // Indica que la eliminación se ha realizado con éxito, pero no se devuelve ningún contenido 
    //en el cuerpo de la respuesta. Esto es adecuado porque la eliminación en sí no 
    //requiere enviar el recurso eliminado de vuelta al cliente.
    @Delete(':id')
    deleteInvtryById(@Param('id') id: number): Promise<any> {
        return this.inventoryService.deleteInvtryById(id);
    }

    @Put(':id')
    @HttpCode(204)
    updateInvtryById(@Param('id') id: number, @Body() body: any): Promise<any> {
        return this.inventoryService.updateInvtryById(id, body);
    }
}
