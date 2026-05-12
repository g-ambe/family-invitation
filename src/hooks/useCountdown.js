import { useEffect, useMemo, useState } from 'react'

const TARGET_DATE = new Date('2026-05-24T11:00:00+09:00').getTime()

function getRemaining() {
  const now = Date.now()
  const diff = Math.max(0, TARGET_DATE - now)
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export default function useCountdown() {
  const [remaining, setRemaining] = useState(getRemaining)

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining()), 1000)
    return () => clearInterval(timer)
  }, [])

  return useMemo(() => remaining, [remaining])
}
