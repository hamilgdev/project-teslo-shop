import { AddIcon, MinusIcon } from '@/components/icons'
import { IconButton } from '@/components/ui/buttons'

export const CartCounter = () => {
  return (
    <div className='flex gap-2'>
      <IconButton
        icon={<MinusIcon size='sm' />}
        arialLabel="Remove product" />

      <span className="text-gray-800 dark:text-white text-center inline-flex items-center rounded-lg text-md p-2">1</span>

      <IconButton
        icon={<AddIcon size='sm' />}
        arialLabel="Add product" />
    </div>
  )
}
