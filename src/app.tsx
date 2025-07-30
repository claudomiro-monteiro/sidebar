import { createContext, useContext, useState } from 'react'
import { CouterAnimated } from './counter-animated'
import { Sidebar } from './sidebar'
import { ToggleMenu } from './toggle-menu'

interface ToggleContextProps {
  isMenuOpen: boolean
  handleToggleMenu: () => void
}

export const ToggleContext = createContext({} as ToggleContextProps)

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <ToggleContext.Provider value={{ handleToggleMenu, isMenuOpen }}>
      <header className="flex h-20 items-center justify-around bg-zinc-950 text-zinc-50 px-4">
        <span className='font-semibold text-2xl pl-2'>Logo</span>
        <div className="z-10 ml-auto flex">
          <ToggleMenu />
        </div>
        <Sidebar />
      </header>
      <div className="flex min-h-dvh items-center justify-center font-semibold text-2xl">
        <CouterAnimated valorFinal={50} />
      </div>
    </ToggleContext.Provider>
  )
}

export const useToggleMenu = () => useContext(ToggleContext)
