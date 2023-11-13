'use client'

import { CartIcon, SearchIcon, BarsIcon, AdjustmentIcon } from '@/components/icons'
import { IconButton, MinimalButton } from '@/components/ui/buttons'
import { MainLogo } from '@/components/ui'
import { useState } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import { uiAtom } from '@/store'
import Link from 'next/link'
interface Props {
  href: string
  text: React.ReactNode
}

const NavLink = ({ href, text }: Props) => {
  return (
    <Link href={href}
      className='text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-800 focus:outline-none font-medium rounded-lg text-md px-4 py-2 md:px-5 md:py-2.5'
    >
      {text}
    </Link>
  )
}

export const MainNavbar = () => {
  const setUI = useSetAtom(uiAtom)
  const { toggleDrawerMenu } = useAtomValue(uiAtom)

  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggleMenu = () => setToggleMenu(!toggleMenu)

  const handleToggleDrawerMenu = () =>
    setUI((prev) => ({ ...prev, toggleDrawerMenu: !toggleDrawerMenu }))

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between py-2 px-4 mx-auto max-w-screen-lg">
          <MainLogo />

          <div className="flex items-center gap-3 md:order-2">
            <IconButton
              icon={<SearchIcon />}
              arialLabel='search'
            />

            <Link href='/cart'>
              <IconButton
                icon={<CartIcon />}
                arialLabel='cart'
              />
            </Link>

            <button
              data-collapse-toggle="main-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-800" aria-controls="main-menu"
              aria-expanded={toggleMenu ? 'true' : 'false'}
              onClick={handleToggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <BarsIcon />
            </button>

            <MinimalButton
              text='Menu'
              icon={<AdjustmentIcon size='sm' />}
              onClick={handleToggleDrawerMenu}
            />
          </div>

          <div className={`${toggleMenu ? 'flex' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
            <ul className="flex flex-col gap-4 mt-4 items-center justify-center w-full font-medium md:flex-row md:mt-0">
              <li>
                <NavLink href='/category/men' text='Hombres'/ >
              </li>

              <li>
                <NavLink href='/category/women' text='Mujeres'/ >
              </li>

              <li>
                <NavLink href='/category/kid' text='Niños'/ >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
