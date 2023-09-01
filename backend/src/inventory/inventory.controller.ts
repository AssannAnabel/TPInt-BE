import { Controller, Get, Param, Post, Body, Delete, Put, HttpStatus, Res } from '@nestjs/common';
import { Inventory } from './inventory.interface';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    async getAllInventory(@Res() res): Promise<Inventory[]> {
        try {
            const invtryResFromService = await this.inventoryService.getAllInventory();
            if (Object.keys(invtryResFromService).length) {
                return res.status(HttpStatus.OK).json(invtryResFromService);
            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: `La URL que estas buscando no existe` })
        }
    }

    @Get(':id')
    async getInvtryById(@Param('id') id: number, @Res() res): Promise<Inventory> {
        try {
            const invtryResFromService = await this.inventoryService.deleteInvtryById(id);
            if (Object.keys(invtryResFromService).length) {
                return res.status(HttpStatus.OK).json(invtryResFromService);
            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: `El registro de inventario con id ${id} no existe`, error: 404 })
        }
    }

    @Post()
    async addInvtry(@Body() invtry: Inventory, @Res() res): Promise<Inventory> {
        try {
            const invtryResFromService = this.inventoryService.addInvtry(invtry);
            if (Object.keys(invtryResFromService).length) {
                return res.status(HttpStatus.CREATED).json(invtryResFromService)
            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json(`Ocurrio un error en la generacion del recurso`)
        }
    }

    // metodo delete es igual que el put, usa metodo 204 no_content
    // Indica que la eliminación se ha realizado con éxito, pero no se devuelve ningún contenido 
    //en el cuerpo de la respuesta. Esto es adecuado porque la eliminación en sí no 
    //requiere enviar el recurso eliminado de vuelta al cliente.
    @Delete(':id')
    async deleteInvtryById(@Param('id') id: number, @Res() res): Promise<Inventory> {
        try {
            const invtryResFromService = await this.inventoryService.deleteInvtryById(id)
            if (Object.keys(invtryResFromService).length) {
                return res.status(HttpStatus.NO_CONTENT).json(invtryResFromService)
            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: `El registro de inventario con id ${id} no existe para ser modificado`, error: 404 })
        }
    }

    @Put(':id')
    async updateInvtryById(@Param('id') id: number, @Body() body: Inventory, @Res() res): Promise<Inventory> {
        try {
            const invtryResFromService = await this.inventoryService.updateInvtryById(id, body);
            if (Object.keys(invtryResFromService).length) {
                return res.status(HttpStatus.NO_CONTENT).json(invtryResFromService)
            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: `El registro de inventario con id ${id} no existe para ser modificado`, error: 404 })
        }
    }
}
