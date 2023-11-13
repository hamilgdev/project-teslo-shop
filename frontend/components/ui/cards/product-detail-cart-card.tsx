
import { usePathname } from 'next/navigation'

import { CartCounter } from '@/components/cart'
import { IProduct } from '@/types/ui.types'
import { MinimalButton } from '@/components/ui/buttons/minimal-button'

interface ProductDetailCartCardProps {
  product: IProduct;
}

export const ProductDetailCartCard = ({
  product
}: ProductDetailCartCardProps) => {
  const pathname = usePathname()
  const { images, title, price } = product

  const isCartPage = pathname.includes('cart')

  return (
    <article className="flex items-start">
      <div className="flex-shrink-0">
        <img className="object-cover w-full rounded-t-lg h-40 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg" src={`/products/${images[0]}`} alt={`Product ${title}`} />
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{title}</p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">Talla: M</p>
        {isCartPage && <CartCounter />}

      </div>
      <div className="flex flex-col gap-3 items-center text-base font-semibold text-gray-900 dark:text-white">
        <span className="">${price}</span>
        {isCartPage && <MinimalButton
          text="Eliminar"
          onClick={() => console.log('delete product')}
        />}
      </div>
    </article>
  )
}
