import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //queries
    const showPost = await prisma.post.findMany({});
    // console.log(showPost);

    const showPost2 = await prisma.post.findMany({
        include:{
            author:{
                select:{
                    email: true
                }
            }
        }
    });
    console.log(showPost2);
}

main();