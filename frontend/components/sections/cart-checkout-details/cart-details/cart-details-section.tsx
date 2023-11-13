import { usePathname } from 'next/navigation'

import { ProductDetailCartCard } from '@/components/ui/cards'
import { initialData } from '@/database/products'
import { cartAtom } from '@/store'
import { IProduct } from '@/types/ui.types'
import { useAtomValue } from 'jotai'

const RAW_PRODUCT: IProduct = initialData.products[0]

export const CartDetailsSection = () => {
  const pathname = usePathname()
  const { products } = useAtomValue(cartAtom)

  const isOrderPage = pathname.includes('orders')
  console.log({ products })
  console.log({ RAW_PRODUCT })

  return (
    <div>
      {!isOrderPage && (
        <h2 className="text-2xl font-semibold text-gray-800  mb-4">Tu carrito</h2>
      )}

      <div className="flow-root">
        <ul role="product-detail-cart-list" className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <ProductDetailCartCard product={RAW_PRODUCT} />
          </li>
          <li className="py-3 sm:py-4">
            <ProductDetailCartCard product={RAW_PRODUCT} />
          </li>
        </ul>
      </div>
    </div>
  )
}
