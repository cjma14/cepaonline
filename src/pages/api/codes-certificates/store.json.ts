import type { APIRoute } from "astro"
import { db, Certificate, Codes, eq } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json();
    const result = await db.insert(Codes).values(data);
    return new Response(JSON.stringify({
        message: "Registro realizado con éxito!"
    })
    )
}
