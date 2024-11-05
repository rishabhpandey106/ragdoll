import { ragchat } from "@/lib/ragchat"
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs"
import { NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const { messages, sessionId } = body
    const lastMessage = messages[messages.length - 1].content
    const response = await ragchat.chat(lastMessage, {
        streaming: true, sessionId: sessionId,
    })
    // console.log("response", response)
    return aiUseChatAdapter(response)

}