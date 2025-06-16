import { draftMode} from "next/headers";
import {redirect} from "next/navigation";

export async function GET() {
    if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
        const draft = await draftMode()
        draft.enable()

    // return new Response(`Draft mode is enabled`)
        redirect("/")
    }

    // return new Response(`Draft mode is not enabled`)
    redirect("/")
}
