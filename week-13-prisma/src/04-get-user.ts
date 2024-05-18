import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function main(){
    //queries
    const showUser = await prisma.user.findMany({});
    // console.log(showUser);

    const showPost = await prisma.post.findMany({});
    // console.log(showPost);

    const specificUser = await prisma.user.findUnique({
        where: {
            id: 2
        },
        include: {          //it will include all the post, whose id is 2.
            posts: true
        }
    })

    console.log(specificUser);
    
}

main();