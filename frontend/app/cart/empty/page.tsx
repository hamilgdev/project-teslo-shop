import { ShopLayout } from '@/components/layouts'
import Link from 'next/link'

export default function CartEmptyPage () {
  return (
    <ShopLayout
      title="Teslo Shop App"
      description="Enjoy our awesome teslo shop app!"
    >
      <section
        className='flex flex-col justify-center items-center'
      >
        <h2 className="text-2xl font-semibold text-gray-800">Tu carrito está vacío</h2>
        <p className="text-gray-600">Agrega <Link href='/' className='text-blue-500' >productos</Link> para continuar</p>
      </section>
    </ShopLayout>
  )
}
