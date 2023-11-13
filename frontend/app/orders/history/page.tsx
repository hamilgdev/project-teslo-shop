'use client'

import { ShopLayout } from '@/components/layouts'
import { OrdersHistorySection } from '@/components/sections'

export default function OrdersHistoryPage () {
  return (
    <ShopLayout
      title="Teslo Shop App - Historial de la orden"
      description="Enjoy our awesome teslo shop app!"
    >
      <OrdersHistorySection />
    </ShopLayout>
  )
}
