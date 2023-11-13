'use client'

import { ShopLayout } from '@/components/layouts'
import { CartCheckoutDetailsSection } from '@/components/sections'

export default function CartPage () {
  return (
    <ShopLayout
      title="Teslo Shop App - Cart"
      description="Enjoy our awesome teslo shop app!"
    >
      <CartCheckoutDetailsSection />
    </ShopLayout>
  )
}
