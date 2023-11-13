import Head from 'next/head'
import React from 'react'
import { MainNavbar, DrawerMenu } from '@/components/ui/navigations'

interface Props {
  title: string
  description: string
  imageFullUrl?: string
  children: React.ReactNode
}

export const ShopLayout = ({
  title,
  description,
  imageFullUrl,
  children
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        {imageFullUrl && <meta property='og:title' content={title} />}
        {imageFullUrl && <meta property='og:description' content={description} />}
        {imageFullUrl && <meta property='og:image' content={imageFullUrl} />}
      </Head>

      <header className='sticky top-0'>
        <MainNavbar />
      </header>

      <main
        className='container mx-auto max-w-screen-lg px-4 py-8'
      >
        {children}
      </main>

      <DrawerMenu />
    </>
  )
}
