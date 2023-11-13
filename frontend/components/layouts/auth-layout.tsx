import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
  description: string
  children: React.ReactNode
}

export const AuthLayout = ({
  title,
  description,
  children
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>

      <main
        className='container mx-auto max-w-screen-lg px-4 py-8'
      >
        {children}
      </main>
    </>
  )
}
