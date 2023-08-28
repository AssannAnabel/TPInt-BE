import { Injectable } from '@nestjs/common';
import { Inventory } from './inventory.interface';

const URL_invtry = 'http://localhost:3001/inventory'

@Injectable()
export class InventoryService {
    private async getAll(): Promise<Inventory[]> {
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

    async getAllInventory(): Promise<Inventory[]> {
        try {
            return await this.getAll()
        } catch (err) {
            throw new Error(err);
        }
    }
}
