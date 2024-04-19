import { Request, Response } from "express";
import { ListCalledService } from "../../Services/called/ListCalledService";

class ListCalledController{
    async handle(req: Request, res: Response){

        const listCalledService = new ListCalledService();

        const called = await listCalledService.execute()

        return res.json(called);

    }
}

export {ListCalledController}