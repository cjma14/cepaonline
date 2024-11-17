import type { APIRoute } from "astro"
import { db, Certificate, Codes, eq } from "astro:db";


export const GET: APIRoute = async ({ params, request }) => {

    return new Response(JSON.stringify({
        message: "Consuta realiza con éxito!",
        data: await db.select().from(Certificate)
    })
    )
}

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json();
    const result = await db.insert(Codes).values(data);
    return new Response(JSON.stringify({
        message: "Registro realizado con éxito!"
    })
    )
}

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

export const DELETE: APIRoute = async (ctx) => {
    console.log(ctx.params.id);
    
    // const result = await db.delete(Codes).where(eq(Codes.id, ctx.params.id ));
    return new Response(JSON.stringify({
        message: "This was a DELETE!"
    })
    )
}