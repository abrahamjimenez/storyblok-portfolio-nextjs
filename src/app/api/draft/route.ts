import { draftMode} from "next/headers";
import {redirect} from "next/navigation";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const slug = searchParams.get("slug")

    if (!slug) {
        return redirect("/")
    }

    if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
        const draft = await draftMode()
        draft.enable()

    // return new Response(`Draft mode is enabled`)
        return redirect(`${slug}?${searchParams.toString()}`)
    }

    // return new Response(`Draft mode is not enabled`)
    return redirect("/")
}
