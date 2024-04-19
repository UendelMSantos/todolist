import { Request, Response } from "express";
import { DeleteCalledService } from "../../Services/called/DeleteCalledService";

class DeleteCalledController{
    async handle(req: Request, res: Response){
        const called_id = req.params.called_id;

        const deleteCalled = new DeleteCalledService();
        
        const called = await deleteCalled.execute({
            called_id
        })

        return res.json(called)

    }
}

export{DeleteCalledController}