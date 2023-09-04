import { Controller, Get, Param, Post, Body, Delete, Put, HttpStatus, Res } from '@nestjs/common';
import { Inventory } from './inventory.interface';
import { InventoryService } from './inventory.service';
import { Response } from 'express';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    async getAllInventory(@Res() res): Promise<Inventory[]> {
        try {
            const invtryResFromService = await this.inventoryService.getAllInventory();
            console.log(invtryResFromService);

            if (Object.keys(invtryResFromService).length) {
                return res.status(HttpStatus.OK).json(invtryResFromService);
            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: `La URL que estas buscando no existe` })
        }
    }

    //ok
    @Get(':id')
    async getInvtryById(@Param('id') id: number, @Res() res: Response): Promise<Response<Inventory>> {
        try {
            const invtryResFromService = await this.inventoryService.getInvtryById(id);
            if (Object.keys(invtryResFromService).length) {
                return res.status(HttpStatus.OK).json(invtryResFromService);
            } else {
                return res.status(HttpStatus.NOT_FOUND).json({ message: `El registro de inventario con id ${id} no existe`, error: 404 })
            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: `El registro de inventario con id ${id} no existe`, error: 404 })
        }
    }

    @Post()
    async addInvtry(@Body() invtry: Inventory, @Res() res: Response): Promise<Response<Inventory>> {
        try {
            const invtryResFromService = await this.inventoryService.addInvtry(invtry);
            if (invtryResFromService) {
                return res.status(HttpStatus.CREATED).json(invtryResFromService)
            } else {
                return res.status(HttpStatus.NOT_FOUND).json({ message: `Ocurrio un error en la generacion del recurso` })
            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: `Ocurrio un error en la generacion del recurso` })
        }
    }

    // metodo delete es igual que el put, usa metodo 204 no_content
    // Indica que la eliminación se ha realizado con éxito, pero no se devuelve ningún contenido 
    //en el cuerpo de la respuesta. Esto es adecuado porque la eliminación en sí no 
    //requiere enviar el recurso eliminado de vuelta al cliente.
    @Delete(':id')
    async deleteInvtryById(@Param('id') id: number, @Res() res: Response): Promise<Response<any>> {
        try {
            const invtryResFromService = await this.inventoryService.deleteInvtryById(id);
            //console.log(invtryResFromService);            
            if (invtryResFromService === null || Object.keys(invtryResFromService).length === 0) {
                return res.status(HttpStatus.NO_CONTENT).json({ message: `el registro ${id} ha sido eliminado` })
            } else {
                return res.status(HttpStatus.NOT_FOUND).json({ message: `El registro de inventario con id ${id} no existe para ser eliminado`, error: 404 })

            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: `El registro de inventario con id ${id} no existe para ser eliminado`, error: 404 })

        }
    }

    //ok
    @Put(':id')
    async updateInvtryById(@Param('id') id: number, @Body() body: Inventory, @Res() res: Response): Promise<Response<Inventory>> {
        try {
            const invtryResFromService = await this.inventoryService.updateInvtryById(id, body);
            if (Object.keys(invtryResFromService).length) {
                return res.status(HttpStatus.NO_CONTENT).send({ message: `Registro con id ${id} modificado con éxito.` })
            } else {
                return res.status(HttpStatus.NOT_FOUND).json({ message: `El registro de inventario con id ${id} no existe para ser modificado`, error: 404 })
            }
        } catch (error) {
            return res.status(HttpStatus.NOT_FOUND).json({ message: `El registro de inventario con id ${id} no existe para ser modificado`, error: 404 })
        }
    }
    
}
