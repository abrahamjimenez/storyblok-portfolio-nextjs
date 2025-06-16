import { draftMode} from "next/headers";
import {redirect} from "next/navigation";

export async function GET(request: Request) {
    const {searchParams}= new URL(request.url)
    const slug = searchParams.get("slug")

    if (!slug) {
        return new Response("Missing slug parameter", {status: 400})
    }

    const draft = await draftMode()
    draft.enable()

    // return new Response(`Draft mode is enabled, ${searchParams}, and, ${slug}`)
    redirect(slug)
}
