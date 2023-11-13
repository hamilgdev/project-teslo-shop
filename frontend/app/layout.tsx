'use client'

import './globals.css'
import { useAtomValue, useSetAtom } from 'jotai'
import { uiAtom } from '@/store'

interface Props {
  children: React.ReactNode;
}

export default function RootLayout ({ children }: Props) {
  const setUI = useSetAtom(uiAtom)

  const { toggleDrawerMenu } = useAtomValue(uiAtom)

  const handleToggleDrawerMenu = (
    event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    event.preventDefault()
    setUI((prev) => ({ ...prev, toggleDrawerMenu: !toggleDrawerMenu }))
  }

  return (
    <html lang='en'>
      <body>{children}

        {toggleDrawerMenu && (
          <div onClick={handleToggleDrawerMenu} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30" />
        )}
      </body>
    </html>
  )
}
