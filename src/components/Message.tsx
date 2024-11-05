import { cn } from "@/lib/utils"
import { User, Bot } from "lucide-react"

interface MessageProps {
    content: string
    isUserMessage: boolean
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
    return <div className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage
    })}>
        <div className="p-6">
            <div className="flex max-w-3xl mx-auto items-start gap-2.5">
                <div className={cn("size-10 shrink-0 aspect-square rounded-full bg-zinc-900 border border-zinc-700 flex justify-center items-center", {
                    "border-blue-700 bg-blue-950 text-zinc-200": !isUserMessage,
                    "border-zinc-700 bg-zinc-500": isUserMessage
                })}>
                    {isUserMessage ? <User className="size-5"/> : <Bot className="size-5 text-white"/>}
                </div>
                <div className="flex flex-col ml-6 w-full">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-white dark:text-white">{isUserMessage ? "You" : "AI"}</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 dark:text-white text-white">{content}</p>
                </div>
            </div>
        </div>
    </div>
} 