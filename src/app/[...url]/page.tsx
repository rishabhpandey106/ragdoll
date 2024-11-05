import ChatWrapper from '@/components/ChatWrapper'
import { ragchat } from '@/lib/ragchat'
import { redis } from '@/lib/redis'
import { cookies } from 'next/headers'
// import { url } from 'inspector'
import React from 'react'

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

function reconstructURL({url}: {url:string[]}) {
    const decodedComponent = url.map(u => decodeURIComponent(u))
    return decodedComponent.join("/")
}

const Page = async ({params}: PageProps) => {
    const sessionCookie = (await cookies()).get("sessionId")?.value
    
    const newUrl = reconstructURL({url: params.url as string[]})

    const sessionId = (newUrl + "--" + sessionCookie).replace(/\//g, "");
    
    const isAlreadyIndexed = await redis.sismember("urls", newUrl)
    
    console.log("isAlreadyIndexed", isAlreadyIndexed)
    if(!isAlreadyIndexed) {
        await ragchat.context.add({
            type: "html",
            source: newUrl,
            config: {
                chunkOverlap: 50,
                chunkSize: 200,
            }
        })
        await redis.sadd("urls", newUrl)
    }
  return (
    <ChatWrapper sessionId={sessionId} />
  )
}

export default Page