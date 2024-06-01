'use client'
import useDevice from 'indies-squad/core/custom-hooks/useDevice'
import BurgerMenu from './BurgerMenu'
import DesktopMenu from './DesktopMenu'

const Menu = () => {
  const device = useDevice()
  const menus = {
    mobile: BurgerMenu,
    tablet: BurgerMenu,
    desktop: DesktopMenu,
  }
  const MenuComponent = menus[device]

  return <MenuComponent />
}

export default Menu
