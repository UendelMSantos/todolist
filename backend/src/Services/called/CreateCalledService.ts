import prismaClient from "../../prisma";

interface CalledProps{
    message: string,
    level: string

}

class CreateCalledService{
    async execute({ message, level}: CalledProps){

        const called = await prismaClient.called.create({
            data:{
                message: message,
                level: level,
            }
        })

        return called

    }
}

export {CreateCalledService}
