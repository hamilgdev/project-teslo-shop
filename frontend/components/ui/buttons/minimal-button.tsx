export interface MinimalButtonProps {
  text: string
  onClick?: () => void
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export const MinimalButton = ({
  text,
  onClick,
  icon,
  type
}: MinimalButtonProps) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className="flex items-center justify-center gap-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      {icon && (<span>{icon}</span>)}
      {text}
    </button>
  )
}
