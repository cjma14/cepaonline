import type { APIRoute } from "astro"
import { db, Certificate, Codes, eq, isNull } from "astro:db";

export const GET: APIRoute = async ({ params, request }) => {

    return new Response(JSON.stringify({
        message: "Consuta realiza con éxito!",
        data: await db.select()
        .from(Codes)
        .where(isNull(Codes.deleted_at))
        .innerJoin(Certificate, eq(Codes.certificate_id, Certificate.id))
    })
    )
}