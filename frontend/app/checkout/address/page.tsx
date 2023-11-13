'use client'

import { ShopLayout } from '@/components/layouts'
import { CheckoutAddressForm } from '@/components/ui/forms'

export default function CheckoutAddressPage () {
  return (
    <ShopLayout
      title="Teslo Shop App - Address"
      description="Enjoy our awesome teslo shop app!"
    >
      <section className="flex flex-col gap-8">
        <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Tu dirección</h1>

        <CheckoutAddressForm />
      </section>
    </ShopLayout>
  )
}
