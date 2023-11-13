'use client'

import { ShopLayout } from '@/components/layouts'
import { ProductCard } from '@/components/ui/cards'
import { SeedProduct, initialData } from '@/database/products'
import { useState } from 'react'

export default function HomePage () {
  const [products] = useState<SeedProduct[]>(initialData.products)

  return (
    <ShopLayout
      title='Teslo Shop App'
      description='Enjoy our awesome teslo shop app!'
    >
      <div className="mb-4">
        <h2 className='text-2xl font-semibold text-gray-800'>Tienda</h2>
        <p className='text-gray-800'>Todos los productos</p>
      </div>

      <section
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.slug}
          />))
        }
      </section>
    </ShopLayout>
  )
}
