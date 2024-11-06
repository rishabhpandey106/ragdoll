import { GlareCard } from '@/components/Safari'
import { TypingAnimation } from '@/components/Type'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center text-gray-900">
      <Head>
        <title>Ragdoll - Chat with Any Website</title>
        <meta name="description" content="Easily chat and get information from any website using Ragdoll!" />
      </Head>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-zinc-500 to-zinc-600 w-full py-24 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Ragdoll</h1>
        <p className="text-lg mb-6">
          The easiest way to chat with any website and get the information you need instantly. 
          Just paste a URL, ask a question, and let the magic happen.
        </p>
        <div className="space-x-4">
          <a href="#about" className="inline-block bg-white text-zinc-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition">
            Learn More
          </a>
          <a href="#how-it-works" className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-zinc-600 transition">
            How it Works
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 pt-20 px-4 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-zinc-600 mb-6">What is Ragdoll?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Ragdoll allows you to easily interact with any website’s content. Simply input the URL of a website, 
          and start chatting with it like you would in a messaging app. Ask questions, get instant answers, and 
          explore the vast amount of information available on the internet in a conversational way.
        </p>
        <TypingAnimation
          className="text-4xl font-bold text-black dark:text-white"
          text="http://localhost:3000/{your-website-url}"
        />
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="pt-4 pb-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-zinc-600 mb-6">How It Works</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-12">
          <div className="w-full sm:w-1/2 md:w-1/3">
            <GlareCard className="flex flex-col items-center justify-center">
              <svg
                width="66"
                height="65"
                viewBox="0 0 66 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
              >
                <path
                  d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                  stroke="currentColor"
                  strokeWidth="15"
                  strokeMiterlimit="3.86874"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-white font-bold text-xl mt-4">Step 1: Paste the URL</p>
              <p className="text-white">Copy and paste the link of any website you want to chat with.</p>
            </GlareCard>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3">
            <GlareCard className="flex flex-col items-center justify-center">
              <svg
                width="66"
                height="65"
                viewBox="0 0 66 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
              >
                <path
                  d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                  stroke="currentColor"
                  strokeWidth="15"
                  strokeMiterlimit="3.86874"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-white font-bold text-xl mt-4">Step 2: Ask Anything</p>
              <p className="text-white">Type your question in the chatbox, and get a response based on the website’s content.</p>
            </GlareCard>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3">
            <GlareCard className="flex flex-col items-center justify-center">
              <svg
                width="66"
                height="65"
                viewBox="0 0 66 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
              >
                <path
                  d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                  stroke="currentColor"
                  strokeWidth="15"
                  strokeMiterlimit="3.86874"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-white font-bold text-xl mt-4">Step 3: Get Instant Answers</p>
              <p className="text-white">Ragdoll analyzes the content and gives you direct, relevant responses in real-time.</p>
            </GlareCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pt-16 pb-10 px-4 text-center">
        <h2 className="text-3xl font-semibold text-zinc-600 mb-6">Ready to Chat with Any Website?</h2>
        <p className="text-lg text-gray-700 mb-8">
          It’s that easy! Discover information quickly, ask anything, and interact with the web like never before.
        </p>
      </section>

      {/* Footer */}
      <footer className=" text-center text-black py-6">
        <p>&copy; 2024 Ragdoll. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
