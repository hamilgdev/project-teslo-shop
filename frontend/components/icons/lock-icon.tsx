import { IconsProps } from '@/types/ui.types'

export const LockIcon = ({ size = 'md' }: IconsProps) => {
  const sm = size === 'sm' && 'w-4 h-4'
  const md = size === 'md' && 'w-6 h-6'
  return (
    <svg className={`${sm || md} text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>
    </svg>
  )
}
