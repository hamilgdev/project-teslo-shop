'use client'

import { AuthLayout } from '@/components/layouts'
import { LoginForm } from '@/components/ui/forms'

export default function AuthLoginPage () {
  return (
    <AuthLayout
      title="Teslo Shop App - Login"
      description="Enjoy our awesome teslo shop app!"
    >
      <section className="flex flex-col justify-center items-center h-screen max-w-lg m-auto">
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Iniciar sesión</h1>
        <LoginForm />
      </section>
    </AuthLayout>
  )
}
