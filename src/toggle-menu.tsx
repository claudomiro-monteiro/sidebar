import Hamburger from 'hamburger-react'
import { useToggleMenu } from './app'

export function ToggleMenu() {
  const { handleToggleMenu, isMenuOpen } = useToggleMenu()

  return (
    <Hamburger
      toggled={isMenuOpen}
      toggle={handleToggleMenu}
      color="#fafafa"
      duration={0.5}
      rounded
    />
  )
}
