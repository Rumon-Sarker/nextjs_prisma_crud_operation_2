import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Create Data
export async function POST(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        let reqBody = await req.json();
        let result = await prisma.category.create({ data: reqBody });
        return NextResponse.json({ status: 'Success', result: result })

    } catch (err) {
        return NextResponse.json({ status: 'Fail', result: err.toString() });

    }

}
// Find Data 
export async function GET(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        let result = await prisma.category.findMany();
        return NextResponse.json({ status: 'Success', result: result })

    } catch (err) {
        return NextResponse.json({ status: 'Fail', result: err.toString() });

    }
}
//UPDATE DATA
export async function PATCH(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        const id = parseInt(searchParams.get('id'))
        let reqBody = await req.json();
        let result = await prisma.category.update({
            where: { id: id },
            data: reqBody
        });
        return NextResponse.json({ status: 'Success', result: result })

    } catch (err) {
        return NextResponse.json({ status: 'Fail', result: err.toString() });

    }
}
// Delete Data 
export async function DELETE(req, res) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        const id = parseInt(searchParams.get('id'))
        let result = await prisma.category.delete({ where: { id: id } });
        return NextResponse.json({ status: 'Success', result: result })

    } catch (err) {
        return NextResponse.json({ status: 'Fail', result: err.toString() });

    }
}

