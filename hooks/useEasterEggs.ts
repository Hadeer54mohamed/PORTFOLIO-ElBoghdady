"use client"

import { useEffect, useState } from "react"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

export default function useEasterEggs() {
  const [glitchMode, setGlitchMode] = useState(false)
  const [sequence, setSequence] = useState<string[]>([])

  useEffect(() => {
    console.log("%c👀 Hey dev… you found the secret zone", 
      "color: #a855f7; font-size: 14px; font-weight: bold;"
    )
  }, [])

  const [clicks, setClicks] = useState(0)

useEffect(() => {
  if (clicks === 5) {
    alert("🚨 You unlocked developer mode!")
  }
}, [clicks])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const newSeq = [...prev, e.key].slice(-KONAMI_CODE.length)

        if (newSeq.join("") === KONAMI_CODE.join("")) {
          setGlitchMode(true)

          setTimeout(() => {
            setGlitchMode(false)
          }, 4000)
        }

        return newSeq
      })
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const handleSecretClick = () => {
    setClicks((prev) => prev + 1)
  }

  return { glitchMode, handleSecretClick }
}