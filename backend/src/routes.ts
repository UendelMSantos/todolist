import { Router, Request, Response } from "express";

//imports called
import { CreateCalledController } from "./Controllers/called/createCalledController";
import { ListCalledController } from "./Controllers/called/ListCalledController";
import { UpdatedCalledController } from "./Controllers/called/UpdatedCalledController";
import { DeleteCalledController } from "./Controllers/called/DeleteCalledController";

const router = Router();

//rotas called

router.post('/', new CreateCalledController().handle);
router.get('/list', new ListCalledController().handle);
router.put('/updated', new UpdatedCalledController().handle)
router.delete('/:called_id', new DeleteCalledController().handle)
export { router };