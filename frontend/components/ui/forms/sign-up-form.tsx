import { MinimalButton, LinkButton } from '@/components/ui/buttons'

export const SignUpForm = () => {
  return (
    <form className='w-full'>

      <div className="mb-6">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu nombre</label>
        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
      </div>

      <div className="mb-6">
        <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>

      <div className="mb-6">
        <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirma tu contraseña</label>
        <input type="password" id="password2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>

      <div className="flex flex-col">
        <MinimalButton text="Registrar" type="submit" />
      </div>

      <div className="flex justify-end mt-6">
        <p className='inline-flex gap-2 text-sm'>
          ¿Ya tienes una cuenta?
          <LinkButton
            href="/auth/login"
            text="Inicia sesión"
          />
        </p>
      </div>
    </form>
  )
}
