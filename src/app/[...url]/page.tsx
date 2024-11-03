import { ragchat } from '@/lib/ragchat'
import { redis } from '@/lib/redis'
import { url } from 'inspector'
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
    const newUrl = reconstructURL({url: params.url as string[]})

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
    <div>page</div>
  )
}

export default Page