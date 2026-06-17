import { db } from "@/src/lib/db";

export async function GET() {
    try {
        // 3rd Party API Calling
        // const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10");
        // const data = await res.json();
        // console.log(data);

        const result = await db.execute({
            sql: 'SELECT * FROM users_data'
        });

        return Response.json(result.rows);

    } catch (error) {
        return Response.json({
            error: "Failed to fetch users ",
            status: 500
        })
    }
}

export async function POST(request: Request) {
    const { name, email } = await request.json();
    if (!name || !email) {
        return Response.json({
            error: "Name and Email required",
            status: 400
        })
    }

    try {
        const result = await db.execute({
            //  ?? to prevent sql injection
            sql: "INSERT INTO users_data (name, email) VALUES (?,?)",
            args: [name, email]
        });

        return Response.json(
            { id: result.lastInsertRowid, name, email },
            { status: 201 }
        );


    } catch (error) {
        return Response.json({
            error: "Failed to create User",
            status: 500
        });
    }
}