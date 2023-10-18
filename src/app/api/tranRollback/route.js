import { PrismaClient } from "@prisma/client";
import { Tulpen_One } from "next/font/google";
import { NextResponse } from "next/server";

// Transaction $ Rollback 
export async function POST(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();

        const createCategory = prisma.category.create({
         data:{
            id: 12,
            title: "ZZZZZZZZZZzz",
            metaTitle: "GoodApple",
            slug: "slig",
            content: "66"
         }
        })
        const deleteCategory = prisma.category.delete({
            where:{id:1}
        })


        let result = await prisma.$transaction([createCategory,deleteCategory])


        return NextResponse.json({ status: 'Success', result: result })

    } catch (err) {
        return NextResponse.json({ status: 'Fail', result: err.toString() });

    }
}

