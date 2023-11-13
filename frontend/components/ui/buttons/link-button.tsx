import Link from 'next/link'

interface LinkButtonProps {
  href: string;
  text: string;
}

export const LinkButton = ({
  href,
  text
}: LinkButtonProps) => {
  return (
    <Link href={href} className="text-sm text-blue-600 dark:text-blue-500 hover:underline">
      {text}
    </Link>
  )
}
