import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //write your prisma client queries 
    const userPost = await prisma.user.create({
        data: {
            email: "harkirt@gmail.com",
            name: "Harkirt Singh",
            posts: {
                create: [
                    {
                        title: "harkirt-title1",
                        content: "content-1"
                    },
                    {
                        title: "harkirt-title2",
                        content: "content-2"
                    }
                ]
            }
        }
    })

    console.log(userPost);
}

main();