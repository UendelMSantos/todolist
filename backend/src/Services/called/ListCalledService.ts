import prismaClient from "../../prisma";

class ListCalledService{
    async execute(){
        const called = await prismaClient.called.findMany({
            select:{
                id: true,
                message: true,
                level: true,
                created_at: true
            }
        })

        return called
    }
}

export {ListCalledService}