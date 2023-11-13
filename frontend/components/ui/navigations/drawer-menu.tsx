'use client'

import { uiAtom } from '@/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { CloseIcon, InboxIcon, LockIcon, LogoutIcon, OrdersIcon, ShoppingIcon, UserIcon, UsersIcon } from '@/components/icons'
import { IconButton } from '@/components/ui/buttons'
import { InputDrawerForm } from '@/components/ui/forms'
import Link from 'next/link'

interface DrawerItemProps {
  icon: React.ReactNode
  label: string
  href: string
}

const DrawerItem = ({ icon, label, href }: DrawerItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 gap-4 text-sm text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      {icon && (<span>{icon}</span>)}
      {label}
    </Link>
  )
}

export const DrawerMenu = () => {
  const setUI = useSetAtom(uiAtom)
  const { toggleDrawerMenu } = useAtomValue(uiAtom)

  const handleToggleDrawerMenu = () =>
    setUI((prev) => ({ ...prev, toggleDrawerMenu: !toggleDrawerMenu }))

  return (
    <aside
      className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${toggleDrawerMenu ? 'transform-none' : 'translate-x-full'}`}
      aria-labelledby="drawer-right-label">

      <div className="absolute top-2.5 right-2.5 inline-flex items-center justify-center">
        <IconButton
          icon={<CloseIcon size='sm' />}
          onClick={handleToggleDrawerMenu}
          arialLabel='Close menu'
        />
      </div>

      <div className='py-8'>
        <div className="my-4">
          <InputDrawerForm />
        </div>

        <ul>
          <li>
            <DrawerItem
              icon={<UserIcon size='sm' />}
              label='Perfil'
              href='#'
            />
          </li>
          <li>
            <DrawerItem
              icon={<OrdersIcon size='sm' />}
              label='Mis Ordenes'
              href='#'
            />
          </li>
          <li>
            <DrawerItem
              icon={<LockIcon size='sm' />}
              label='Ingresar'
              href='#'
            />
          </li>
          <li>
            <DrawerItem
              icon={<LogoutIcon size='sm' />}
              label='Salir'
              href='#'
            />
          </li>
        </ul>

        <h3 className='my-4 text-sm font-bold text-gray-900 dark:text-white uppercase'
        >Admin Panel</h3>

        <ul>
          <li>
            <DrawerItem
              icon={<ShoppingIcon size='sm' />}
              label='Productos'
              href='#'
            />
          </li>
          <li>
            <DrawerItem
              icon={<InboxIcon size='sm' />}
              label='Ordenes'
              href='#'
            />
          </li>
          <li>
            <DrawerItem
              icon={<UsersIcon size='sm' />}
              label='Usuarios'
              href='#'
            />
          </li>
        </ul>
      </div>
    </aside>
  )
}
