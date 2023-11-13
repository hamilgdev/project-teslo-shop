import Link from 'next/link'

export const MainLogo = () => {
  return (
    <Link href="/" passHref>
      <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Teslo | Shop</h1>
    </Link>
  )
}
