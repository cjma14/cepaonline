import type { APIRoute } from "astro"
import { db, Certificate, Codes, eq } from "astro:db";

export const PUT: APIRoute = async ({ request }) => {
    const data = await request.json();
    const result = await db.update(Codes)
        .set(data)
        .where(
            eq(Codes.id, data.idCode));

    return new Response(JSON.stringify({
        message: "Actualización realizada con éxito!"
    })
    )
}
