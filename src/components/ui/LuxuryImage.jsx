import { useState } from 'react'
import clsx from 'clsx'

export default function LuxuryImage({ src, alt, className = '' }) {
  const [error, setError] = useState(false)

  if (error) {
    return <div className={clsx('bg-gradient-to-br from-stone-200 to-stone-100', className)} aria-label="image placeholder" />
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setError(true)} className={clsx('h-full w-full object-cover', className)} />
}
