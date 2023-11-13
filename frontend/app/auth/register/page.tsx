'use client'

import { AuthLayout } from '@/components/layouts'
import { SignUpForm } from '@/components/ui/forms'

export default function AuthRegisternPage () {
  return (
    <AuthLayout
      title="Teslo Shop App - Registrarse"
      description="Enjoy our awesome teslo shop app!"
    >
      <section className="flex flex-col justify-center items-center h-screen max-w-lg m-auto">
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Crea una cuenta</h1>
        <SignUpForm />
      </section>
    </AuthLayout>
  )
}
