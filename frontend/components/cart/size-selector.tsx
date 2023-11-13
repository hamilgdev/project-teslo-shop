import { ISizes } from '@/types/ui.types'
import { useState } from 'react'

interface SizeSelectorProps {
  sizes: ISizes[]
}

export const SizeSelector = ({
  sizes = []
}: SizeSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState('')

  return (

    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => setSelectedSize(size)}
          className={'flex items-center justify-center text-gray-900 bg-white border border-gray-300 p-2 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' + (selectedSize === size ? ' border-gray-900 dark:border-gray-900' : '')}
        >
          <span className="sr-only">Size {size}</span>
          <span className="text-sm font-medium">{size}</span>
        </button>
      ))}
    </div>
  )
}
