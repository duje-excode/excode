export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const name = data.get("fullName");
    const budget = data.get("budget");
    const email = data.get("email");
    const msg = data.get("message");

    if (!name || !budget || !email || !msg) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" }
            }
        );
    }

    return new Response(
        JSON.stringify({
            message: "Your message was sent successfully!",
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
    
}