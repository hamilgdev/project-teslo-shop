import { IProduct } from '@/types/ui.types'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({
  product
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const { description, images, slug } = product

  const determineUrlImage = useMemo(() => isHovered ? `/products/${images[1]}` : `/products/${images[0]}`, [images, isHovered])

  return (
    <Link
      passHref
      href={`/product/${slug}`}
      prefetch={false}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article className="w-full max-w-sm bg-[#f9f9f9] border border-[#f9f9f9] rounded-lg shadow">
        <img className="p-8 rounded-t-lg" src={determineUrlImage} alt={`Product ${description}`} />
      </article>
    </Link>

  )
}
