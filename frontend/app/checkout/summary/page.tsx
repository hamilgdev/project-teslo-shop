'use client'

import { ShopLayout } from '@/components/layouts'
import { CartCheckoutDetailsSection } from '@/components/sections'

export default function CheckoutSummaryPage () {
  return (
    <ShopLayout
      title="Teslo Shop App - Summary"
      description="Enjoy our awesome teslo shop app!"
    >
      <CartCheckoutDetailsSection />
    </ShopLayout>
  )
}
