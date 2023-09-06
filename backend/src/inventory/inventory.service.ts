import { Injectable } from '@nestjs/common';
import { Inventory } from './inventory.interface';

const URL_invtry = 'http://localhost:3030/inventory/'

@Injectable()
export class InventoryService {
    private async getInvtry(): Promise<Inventory[]> {
        try {
            const res = await fetch(URL_invtry, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err)
        }
    }

    private async setId(): Promise<number> {
        const invtry = await this.getInvtry();
        const lastInvtry = invtry[invtry.length - 1];
        const id = lastInvtry.id + 1; //remember zero index array
        return id;
    }

    async getAllInventory(): Promise<Inventory[]> {
        try {
            return await this.getInvtry()
        } catch (err){
            throw new Error(err);
        }
    }

    async getInvtryById(id: number): Promise<Inventory> {
        try {
            const res = await fetch(URL_invtry + id, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const parsed = await res.json()
            return parsed;
        } catch (err) {
            throw new Error(err)
        }
    }

    async addInvtry(invtry: Inventory): Promise<Inventory> {
        try {
            const id: number = await this.setId();
            const newInvtry = { ...invtry, id }
            const res = await fetch(URL_invtry, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newInvtry)
            });
            const parsed = await res.json();
            console.log(parsed);            
            return parsed;
        } catch (err) {
            throw new Error(err)
        }

    }

    async deleteInvtryById(id: number): Promise<Inventory> {
        try {
            const res = await fetch(URL_invtry + id, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            const parsed = await res.json();
            console.log(`hola ${parsed}`);
            
            return parsed;
        } catch (err) {
            throw new Error(err);
        }
    }

    async updateInvtryById(id: number, body: Inventory): Promise<Inventory> {
        try {
            const isInvtry = await this.getInvtryById(id);
            if (!Object.keys(isInvtry).length) return; // si no encuentra el id, corta aca
            const updateInvtry = { ...body, id }
            const res = await fetch(URL_invtry + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateInvtry)
            })
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err)
        }
    }
}
