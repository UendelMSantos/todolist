import { Request, Response } from "express";
import { CreateCalledService } from "../../Services/called/CreateCalledService";

class CreateCalledController{
    async handle(req: Request, res: Response){
        const {message, level} = req.body;

        const createCalledService = new CreateCalledService();

        const called = await createCalledService.execute({
            message: message,
            level: level
        })

        return res.json(called);

    }
}

export {CreateCalledController};