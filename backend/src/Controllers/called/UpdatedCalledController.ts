import { Request, Response } from "express";
import { UpdatedCalledService } from "../../Services/called/UpdatedCalledService";

class UpdatedCalledController{
    async handle(req: Request, res: Response){
        const {called_id, message, level} = req.body

        const updatedCalledService = new UpdatedCalledService();
        
        const called = await updatedCalledService.execute({
            called_id,
            message,
            level,

        })

        return res.json(called);

    }
}

export { UpdatedCalledController }