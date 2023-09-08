import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Inventory } from './inventory.interface';

const URL_invtry = 'http://localhost:3030/inventory/'

@Injectable()
export class InventoryService {
    private async getInvtry(): Promise<any[]> {
        const res = await fetch(URL_invtry, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const parsed = await res.json();
        if (Object.keys(parsed).length) return parsed;
        throw new NotFoundException(`No encontramos lo que buscabas... `)
    }

    private async setId(): Promise<number> {
        const invtry = await this.getInvtry();
        const lastInvtry = invtry[invtry.length - 1];
        const id = lastInvtry.id + 1; //remember zero index array
        return id;
    }

    async getAllInventory(): Promise<any[]> {
        return await this.getInvtry();
    }

    async getInvtryByItem(item: string): Promise<any[]>{
        const res = await fetch(URL_invtry);
        const allInvtry = await res.json();
        const items = allInvtry.filter((invtry: Inventory)=> invtry.item === item)
        if(!items.length) throw new NotFoundException(`No hay ${item} en stock`)
        return items;

    }

    async getInvtryById(id: number): Promise<any> {
        const res = await fetch(URL_invtry + id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const parsed = await res.json();     
        if(Object.keys(parsed).length) return parsed;
        throw new NotFoundException(`No existe registro en la posicion ${id}`)
    }

    async addInvtry(invtry: any): Promise<any> {
        const id: number = await this.setId();
        const newInvtry = { ...invtry, id }
        const res = await fetch(URL_invtry, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newInvtry)
        });
        const parsed = await res.json();
        if(Object.keys(parsed).length) return parsed;
        throw new BadRequestException(`Ocurrio un error al crear el nuevo registro`)
    }

    async deleteInvtryById(id: number): Promise<any> {
        const res = await fetch(URL_invtry + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        const parsed = await res.json();
        if(!Object.keys(parsed).length) return parsed;
        throw new NotFoundException(`No existe registro en la posicion ${id} para ser eliminado`)
    }

    async updateInvtryById(id: number, body: any): Promise<any> {
        const isInvtry = await this.getInvtryById(id);
        if (!Object.keys(isInvtry).length) throw new NotFoundException(`No existe registro en la posicion ${id}`); // si no encuentra el id, corta aca
        const updateInvtry = { ...body, id }
        const res = await fetch(URL_invtry + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateInvtry)
        })
        const parsed = await res.json();
        if(Object.keys(parsed).length) return parsed;
        throw new NotFoundException(`No existe registro en la posicion ${id}`)
    }
}