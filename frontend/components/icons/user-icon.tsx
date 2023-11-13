import { IconsProps } from '@/types/ui.types'

export const UserIcon = ({ size = 'md' }: IconsProps) => {
  const sm = size === 'sm' && 'w-4 h-4'
  const md = size === 'md' && 'w-6 h-6'
  return (
    <svg className={`${sm || md} text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
    </svg>
  )
}
