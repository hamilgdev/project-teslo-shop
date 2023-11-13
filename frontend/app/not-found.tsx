import { ShopLayout } from '@/components/layouts'

export default function NotFound () {
  return (
    <ShopLayout
      title='Not Found'
      description='Not Found'
    >

      <section
        className='flex flex-col justify-center items-center'
      >
        <h1 className='text-4xl font-semibold text-gray-800'>404</h1>
        <h2 className='text-xl font-semibold text-gray-800'>Not Found</h2>
        <p className='text-gray-800'>Could not find requested resource</p>
      </section>

    </ShopLayout>
  )
}
