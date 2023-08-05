import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemController {
    async index(Request: Request, Response: Response) {
        const items = await  knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            };
        });
    
        return Response.json(serializedItems);
    }
}

export default ItemController;