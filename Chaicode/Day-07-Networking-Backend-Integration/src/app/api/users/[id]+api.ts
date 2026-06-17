import { db } from "@/src/lib/db";

type Ctx = { id: string };

// _req ignore for now
export async function GET(_req: Request, { id }: Ctx) {
    try {
        const result = await db.execute({
            sql: 'SELECT * FROM users_data WHERE id=?',
            // Using 10 ensures the string is interpreted as a normal decimal number.
            args: [parseInt(id, 10)]
        });
        return Response.json(result.rows);
    } catch (error) {
        return Response.json({
            error: "No user found",
            status: 500
        })
    }
}


export async function PATCH(request: Request, { id }: Ctx) {
    try {
        const result = await db.execute({
            sql: "SELECT * FROM users_data WHERE id=?",
            args: [parseInt(id,10)]
        });
        return Response.json(result.rows)
    } catch (error) {
        return Response.json({
            error: "Unable to update",
            status: 500
        })
    }
}

export async function PUT(request: Request, { id }: Ctx) {
    try {
        const result = await db.execute({
            sql: "SELECT * FROM users_data WHERE id=?",
            args: [parseInt(id,10)]
        });
        return Response.json(result.rows)
    } catch (error) {
        return Response.json({
            error: "Unable to update",
            status: 500
        })
    }
}

export async function DELETE(request: Request, { id }: Ctx) {
    try {
        const result = await db.execute({
            sql: "SELECT * FROM users_data WHERE id=?",
            args: [parseInt(id,10)]
        })
    } catch (error) {
        return Response.json({
            error: "No user exist!",
            status: 500
        })

    }
}