import type { APIRoute } from "astro"
import { db, Certificate, Codes, eq } from "astro:db";

export const GET: APIRoute = async ({ params, request }) => {

    return new Response(JSON.stringify({
        message: "Consuta realiza con éxito!",
        data: await db.select().from(Certificate)
    })
    )
}