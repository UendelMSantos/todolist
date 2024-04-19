import prismaClient from "../../prisma";

interface CalledRequest{
    called_id: string
    message: string
    level: string
}

class UpdatedCalledService{
    async execute( {called_id, message, level}: CalledRequest ){

        const called = await prismaClient.called.update({
            where:{
                id: called_id
            },
            data:{
                message: message,
                level: level,
            }
        })

        return called

    }
}

export {UpdatedCalledService}