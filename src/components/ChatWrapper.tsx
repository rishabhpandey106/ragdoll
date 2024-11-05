'use client'

import { useChat } from "ai/react"
import { Messages } from "./Messages"
import { ChatInput } from "./ChatInput"

const ChatWrapper = ({sessionId}: {sessionId: string}) => {
    const {messages, handleInputChange, handleSubmit, input,  setInput} = useChat({
        api: "/api/chat-stream",
        body: {
            sessionId
        },
    })

    return (
        <div className="w-full min-h-full relative bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
            <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
                <Messages messages={messages} />
            </div>
            <ChatInput
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                setInput={setInput}
            />
        </div>
    )
}

export default ChatWrapper