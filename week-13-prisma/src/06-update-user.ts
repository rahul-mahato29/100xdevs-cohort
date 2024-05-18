import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //queries
    const updatedUser = await prisma.user.update({
        where: {
            id: 1
        },
        data:{
            name: "Rahul Mahato"
        }
    })

    console.log(updatedUser);
    
}

main();