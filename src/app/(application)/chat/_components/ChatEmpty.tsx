import React, { useEffect, useState } from "react"
import { Crown } from "lucide-react"

const exampleQuestions = [
  "Effective platforms for real estate listings?",
  "Modern tech for property management?",
  "Key features of a stylish real estate website?",
  "Tools for market analysis and valuation?",
  "Social media tips for real estate marketing?",
  "Advantages of Next.js in real estate development?",
  "Minimalistic design for property listing page?",
  "Strategies for user engagement on a real estate site?",
  "Implementing geolocation in a real estate app?",
  "Tips for elegant property brochures?",
]

const ChatEmpty = ({ setInput }: { setInput: (inp: string) => void }) => {
  const [randomQuestions, setRandomQuestions] = useState<string[]>([])

  useEffect(() => {
    const shuffledQuestions = [...exampleQuestions].sort(
      () => Math.random() - 0.5
    )
    const selectedQuestions = shuffledQuestions.slice(0, 3)

    setRandomQuestions(selectedQuestions)
  }, [])

  const handleExampleClick = (inp: string) => {
    setInput(inp)
  }

  return (
    <div className="block w-full grid-cols-12 items-center gap-x-4 gap-y-12 space-y-4 md:grid md:space-y-0">
      <section className="col-span-6 max-w-[300px]">
        <h1 className="mb-2 text-2xl font-semibold">Ask Anything</h1>
        <p className="text-muted-foreground">
          Trained Upon the latest <span className="text-primary">GPT-4</span>{" "}
          model for the real estate industry.
        </p>
      </section>
      <section className="col-span-6 h-full">
        <div className="min-h-[100px] rounded-2xl border">
          <div className="my-1 flex justify-between px-4 py-2">
            <div>
              <h3 className="pt-1 text-sm">Current Model</h3>
              <p className="text-muted-foreground">OpenAI gpt-4 (turbo)</p>
            </div>
            <div>
              <button className="h-8 w-8 cursor-pointer rounded-full bg-muted/80 p-2 text-primary hover:bg-secondary">
                <Crown className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-muted p-2 px-4">
            <span>Become a Premium user</span>
            <div></div>
          </div>
        </div>
      </section>
      <section className="col-span-12 ">
        <h3 className="mb-4">Examples</h3>
        <div className="block w-full grid-cols-3 gap-4 space-y-4 md:grid md:space-y-0">
          {randomQuestions.map((question, index) => (
            <div
              onClick={() => handleExampleClick(question)}
              key={index}
              className="cursor-pointer rounded-lg bg-muted/80 p-4 hover:bg-secondary"
            >
              {question}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ChatEmpty
