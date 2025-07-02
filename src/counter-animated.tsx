import { useEffect, useState } from 'react'

interface CounterAnimatedProps {
  valorFinal: number
}

export function CouterAnimated({ valorFinal }: CounterAnimatedProps) {
  const [count, setCount] = useState(0)
  const [animated, setAnimated] = useState(true)

  useEffect(() => {
    let intervalo: number

    if (animated) {
      intervalo = setInterval(() => {
        setCount(prevCont => {
          const newCount = prevCont + 1
          if (newCount >= valorFinal) {
            setAnimated(false)
            clearInterval(intervalo)
            return valorFinal
          }
          return newCount
        })
      }, 60)
    }

    return () => {
      clearInterval(intervalo)
    }
  }, [animated, valorFinal])

  return (
    <div className="text-center">
      + de <span className="font-extrabold text-5xl text-red-700">{count}</span>{' '}
      clientes satifeitos
    </div>
  )
}
