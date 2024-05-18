import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});  //for debug-log - it will return the exact sql-query running under-hood

async function main(){
    //queries
    const user = await prisma.user.findMany({});
    console.log(user);
}

main();