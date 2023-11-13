import { IconsProps } from '@/types/ui.types'

export const UsersIcon = ({ size = 'md' }: IconsProps) => {
  const sm = size === 'sm' && 'w-4 h-4'
  const md = size === 'md' && 'w-6 h-6'
  return (
    <svg className={`${sm || md} text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
    </svg>
  )
}
