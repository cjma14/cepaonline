import type { APIRoute } from "astro"
import { db, Certificate, Codes, eq, isNull, and } from "astro:db";
import { not } from "drizzle-orm";

export const GET: APIRoute = async ({ params, request }) => {
    const idCertificarteTBA = 14;
    return new Response(JSON.stringify({
        message: "Consuta realiza con éxito!",
        data: await db.select()
        .from(Codes)
        .where(
            and(
                isNull(Codes.deleted_at),
                eq(Codes.certificate_id, idCertificarteTBA)
            )
        )
        .innerJoin(Certificate, eq(Codes.certificate_id, Certificate.id))
    })
    )
}