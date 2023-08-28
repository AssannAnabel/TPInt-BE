import { Injectable } from '@nestjs/common';
import { Inventory } from './inventory.interface';

const URL_invtry = 'http://localhost:3001/inventory'

@Injectable()
export class InventoryService {
    private async getInvtry(): Promise<Inventory[]> {
        try {
            const res = await fetch(URL_invtry, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const parsed = await res.json();
            return parsed;
        } catch (err) {
            throw new Error(err)
        }
    }

    private async setId(): Promise<number> {
        const invtry = await this.getInvtry();
        const id = invtry.pop().id - 1; //remember zero index array
        return id;
    }

    async getAllInventory(): Promise<Inventory[]> {
        try {
            return await this.getInvtry()
        } catch (err) {
            throw new Error(err);
        }
    }

    async getInvtryById(id: number): Promise<Inventory> {
        try {
            const res = await fetch(URL_invtry + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const parsed = await res.json()
            return parsed;
        } catch (err) {
            throw new Error(err)
        }
    }
}
