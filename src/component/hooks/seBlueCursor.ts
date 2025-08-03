import { useEffect, useRef, useState } from "react"

export function useBlueCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const waveRef = useRef<HTMLDivElement>(null)
  const visibleRef = useRef(true)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let animationFrameId: number

    const updatePosition = (clientX: number, clientY: number) => {
      const cursor = cursorRef.current
      if (cursor) {
        cursor.style.left = `${clientX}px`
        cursor.style.top = `${clientY}px`
      }
    }

    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const margin = 16
      const w = window.innerWidth
      const h = window.innerHeight
      const isNearEdge =
        clientX < margin ||
        clientY < margin ||
        clientX > w - margin ||
        clientY > h - margin

      if (isNearEdge && visibleRef.current) {
        visibleRef.current = false
        setVisible(false)
      } else if (!isNearEdge && !visibleRef.current) {
        visibleRef.current = true
        setVisible(true)
      }

      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => {
        updatePosition(clientX, clientY)
      })
    }

    const handleDown = (e: MouseEvent) => {
      const wave = waveRef.current
      if (wave) {
        wave.style.left = `${e.clientX}px`
        wave.style.top = `${e.clientY}px`
        wave.classList.remove("active")
        void wave.offsetWidth
        wave.classList.add("active")
      }
    }

    document.addEventListener("mousemove", handleMove)
    document.addEventListener("mousedown", handleDown)

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.removeEventListener("mousemove", handleMove)
      document.removeEventListener("mousedown", handleDown)
    }
  }, [])

  return { cursorRef, waveRef, visible }
}
