'use client'

import { CartCounter, SizeSelector } from '@/components/cart'
import { ShopLayout } from '@/components/layouts'
import { MinimalButton } from '@/components/ui/buttons'
import { initialData } from '@/database/products'
import { IProduct } from '@/types/ui.types'

const RAW_PRODUCT: IProduct = initialData.products[0]

export default function ProductPage () {
  const handleAddToCart = () => console.log('add to cart')

  return (
    <ShopLayout
      title="Teslo Shop App"
      description="Enjoy our awesome teslo shop app!"
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-lg shadow">
          <img
            className="block w-full h-full object-cover rounded-lg"
            src={`/products/${RAW_PRODUCT.images[0]}`}
            alt={`Product ${RAW_PRODUCT.description}`}
          />
        </div>

        <article className="flex flex-col gap-4 p-4"
        >
          <header
            className='flex flex-col gap-2'
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {RAW_PRODUCT.title}
            </h2>
            <small className="text-gray-500"
            >${RAW_PRODUCT.price}</small>
          </header>
          <main
            className="flex flex-col gap-2"
          >
            <h3 className="text-gray-500"
            >Cantidad:</h3>
            <CartCounter />
            <SizeSelector sizes={RAW_PRODUCT.sizes} />
            <MinimalButton text="Agregar al Carrito" onClick={handleAddToCart} />
          </main>
          <footer className='flex flex-col gap-2'>
            <h3 className="text-gray-500"
            >Description:</h3>
            <p className="text-gray-600">{RAW_PRODUCT.description}</p>
          </footer>
        </article>
      </section>
    </ShopLayout>
  )
}
