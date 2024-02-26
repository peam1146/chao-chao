import { useEffect, useRef, useState } from 'react'

const usePopover = () => {
  const [isFocus, setIsFocus] = useState(false)
  const inputEl = useRef<HTMLInputElement | null>(null)
  const popoverEl = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleFocus = () => {
      if (
        document.activeElement === inputEl.current ||
        document.activeElement === popoverEl.current
      ) {
        setIsFocus(true)
      } else {
        setIsFocus(false)
      }
    }

    document.addEventListener('click', handleFocus)

    return () => {
      document.removeEventListener('click', handleFocus)
    }
  }, [])

  return { isFocus, inputEl, popoverEl }
}

export default usePopover
