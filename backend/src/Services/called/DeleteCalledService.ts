import prismaClient from "../../prisma";

interface idProps{
    called_id: string
}

class DeleteCalledService{
    async execute({called_id}: idProps){

        const called = await prismaClient.called.delete({
            where:{
                id: called_id
            }
        })

        return called

    }
}

export{DeleteCalledService}