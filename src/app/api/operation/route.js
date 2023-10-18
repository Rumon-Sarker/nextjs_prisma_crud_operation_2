import { PrismaClient } from "@prisma/client";
import { Tulpen_One } from "next/font/google";
import { NextResponse } from "next/server";

// Aggregate Sum,Avg,Min,Mix,Sum,Coount
export async function POST(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();


        let result = await prisma.category.aggregate({

            _count: { id: true },
            _avg: { id: true },
            _max: { id: true },
            _min: { id: true },
            _sum: { id: true }

        });


        return NextResponse.json({ status: 'Success', result: result })

    } catch (err) {
        return NextResponse.json({ status: 'Fail', result: err.toString() });

    }
}


export async function GET(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();


        let result = await prisma.category.groupBy({
            by: ["title"],
            _count: { id: true },
            _avg: { id: true },
            _max: { id: true },
            _min: { id: true },
            _sum: { id: true }

        });


        return NextResponse.json({ status: 'Success', result: result })

    } catch (err) {
        return NextResponse.json({ status: 'Fail', result: err.toString() });

    }
}