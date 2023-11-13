'use client'

import { ShopLayout } from '@/components/layouts'
import { CartCheckoutDetailsSection } from '@/components/sections'

interface OrdersPageProps {
  params: {
    id: string;
  };
}

export default function OrdersPage ({ params }: OrdersPageProps) {
  console.log({ params })

  return (
    <ShopLayout
      title="Teslo Shop App - Resumen de orden"
      description="Enjoy our awesome teslo shop app!"
    >
      <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Orden:</h1>
      <CartCheckoutDetailsSection />
    </ShopLayout>
  )
}
