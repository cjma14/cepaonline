import type { APIRoute } from "astro"
import { db, Certificate, Codes, eq } from "astro:db";

export const DELETE: APIRoute = async (ctx) => {
    const id = Number(ctx.params.id)

    const result = await db.update(Codes)
        .set({
            deleted_at: new Date()
        })
        .where(
            eq(Codes.id, id));
    return new Response(JSON.stringify({
        message: "This was a DELETE!"
    })
    )
}