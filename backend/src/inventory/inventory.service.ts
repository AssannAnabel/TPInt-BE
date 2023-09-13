import { Injectable, NotFoundException } from '@nestjs/common';
const URL_inventory = 'http://localhost:3030/inventory/';
import { Inventory } from './inventory.interface';
import { InventoryDto } from './inventory.dto';
import { Inven_idDto } from './inventoryId.dto';

@Injectable()
export class InventoryService {

    // private async setId(): Promise<number> {
    //     const invtry = await this.getInvtry();
    //     const id = invtry.pop().id +1;
    //     return id;
    // }
    private async getAll(): Promise<Inven_idDto[]> {
        const res = await fetch(URL_inventory);
        const parsed = await res.json();
        return parsed;
    }

    //busqueda por item
    async getInvtryByItem(item: string): Promise<Inven_idDto[]> {
        const res = await fetch(URL_inventory);
        const allInvtry = await res.json();
        const items = allInvtry.filter((invtry: Inventory) => invtry.item === item)
        if (!items.length) throw new NotFoundException(`No hay ${item} en stock`)
        return items;
    } 

    async getInvtry(): Promise<InventoryDto[]> {
            return await this.getAll();

    }
    //GETBYID
    async getInvtryById(id: number): Promise<InventoryDto> {
        try {
            const res = await fetch(URL_inventory + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err);
        }
    }
    //POST
    async createInvtry(invtry: InventoryDto): Promise<InventoryDto> {
        try {
            // const id = await this.setId();
            const newInvtry = { ...invtry };
            const res = await fetch(URL_inventory, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newInvtry)
            });
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err);
        }
    }
    //DELETE

    async deleteInvtryById(id: number): Promise<InventoryDto> {
        const res = await fetch(URL_inventory + id, {
            method: 'DELETE',
        });

        if (!res.ok) {
            throw new Error('Failed to delete');
        }

        const parsed = await res.json();
        return parsed;
    }


    //PUT
    async updateInvtryById(id: number, invtry: InventoryDto): Promise<InventoryDto> {
        try {
            const isInvtry = await this.getInvtryById(id);
            //Object.keys verifica si isInvtry viene con datos, y si no, se detiene ahi.
            if (!Object.keys(isInvtry).length) return;
            const updateInvtry = { ...invtry, id };
            const res = await fetch(URL_inventory + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateInvtry)
            });
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err)
        }
    }
}