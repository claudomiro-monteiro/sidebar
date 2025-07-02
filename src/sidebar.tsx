import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useEffect, useRef } from 'react'
import { useToggleMenu } from './app'

export function Sidebar() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(SplitText)

  // const container = useRef(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  const { isMenuOpen, handleToggleMenu } = useToggleMenu()

  useGSAP(
    () => {
      const split = SplitText.create('.texto', { type: 'chars', mask: 'chars' })

      gsap.set('#sidebar', { clipPath: 'circle(0% at 99% -10%' })

      tl.current = gsap
        .timeline({ paused: true })
        .to('#sidebar', { clipPath: 'circle(100% at 50% 50%' })
        .from(split.chars, {
          opacity: 0,
          // duration: 0.6,
          yPercent: 'random([-150, 150])',
          xPercent: 'random([-150, 150])',
          // autoAlpha: 0,
          // yoyo: true,
          stagger: {
            from: 'random',
            amount: 0.6,
          },
          ease: 'power3.out',
        })
    }
    // { scope: container }
  )

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play()
    } else {
      tl.current?.reverse()
    }
  }, [isMenuOpen])

  return (
    // <div className="flex">
    <nav
      id="sidebar"
      className="fixed right-0 bottom-0 left-0 z-20 flex h-[calc(100%-5rem)] w-full flex-col items-center justify-evenly bg-zinc-500"
    >
      <a href="#" onClick={handleToggleMenu} className="texto">
        Opção 1
      </a>
      <a href="#" onClick={handleToggleMenu} className="texto">
        Opção 2
      </a>
      <a href="#" onClick={handleToggleMenu} className="texto">
        Opção 3
      </a>
      <a href="#" onClick={handleToggleMenu} className="texto">
        Opção 4
      </a>
    </nav>
    // </div>
  )
}
