import { IconButtonProps } from '@/types/ui.types'

export const IconButton = ({
  onClick,
  icon,
  arialLabel
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className="text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-800 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
      onClick={onClick}
    >
      {icon && icon}
      <span className="sr-only">Icon {arialLabel}</span>
    </button>
  )
}
