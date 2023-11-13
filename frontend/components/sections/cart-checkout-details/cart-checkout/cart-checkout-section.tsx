import { usePathname } from 'next/navigation'

import { MinimalButton } from '@/components/ui/buttons/minimal-button'
import { LinkButton } from '@/components/ui/buttons'

const CheckoutSummary = ({ isSummaryPage }: { isSummaryPage: boolean }) => {
  return (
    <div>
      {isSummaryPage && (
        <div className="flex justify-between items-center">
          <h4 className='text-sm font-semibold text-gray-500'>Orden</h4>
          <LinkButton text="Cambiar" href="/cart" />
        </div>
      )}

      <div className="flex justify-between mt-2">
        <span className="text-gray-600 dark:text-white text-sm">No. Productos</span>
        <span className="text-gray-900 dark:text-white text-sm">3 items</span>
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-gray-600 dark:text-white text-sm">Subtotal</span>
        <span className="text-gray-900 dark:text-white text-sm">$200</span>
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-gray-600 dark:text-white text-sm">Impuestos (15%)</span>
        <span className="text-gray-900 dark:text-white text-sm">$ 35.34</span>
      </div>

      <div className="flex justify-between mt-2 border-t pt-2">
        <span className="text-gray-600 dark:text-white text-sm font-semibold">Total:</span>
        <span className="text-gray-900 dark:text-white text-sm font-semibold">$ 235.34</span>
      </div>
    </div>
  )
}

const AddressSummary = () => {
  return (
    <div className='border-b pb-2'>
      <div className="flex justify-between items-center">
        <h4 className='text-sm font-semibold text-gray-500'>Dirección de entrega</h4>
        <LinkButton text="Cambiar" href="/checkout/address" />
      </div>
      <div className="flex justify-between mt-2 gap-2">
        <span className="text-gray-600 dark:text-white text-sm">Nombre:</span>
        <span className="text-gray-900 dark:text-white text-sm text-right">Juan Perez</span>
      </div>

      <div className="flex justify-between mt-2 gap-2">
        <span className="text-gray-600 dark:text-white text-sm">Dirección:</span>
        <span className="text-gray-900 dark:text-white text-sm text-right">Calle 123, Col. Centro, CDMX</span>
      </div>

      <div className="flex justify-between mt-2 gap-2">
        <span className="text-gray-600 dark:text-white text-sm">Teléfono:</span>
        <span className="text-gray-900 dark:text-white text-sm text-right">55 1234 5678</span>
      </div>
    </div>
  )
}

export const CartCheckoutSection = () => {
  const pathname = usePathname()

  const isSummaryPage = pathname.includes('summary')

  return (
    <div className="p-4 shadow-md rounded-md border-dashed border-2 h-fit">
      <h3 className="text-1xl font-semibold text-gray-500 border-b pb-2">
        {isSummaryPage ? 'Resumen de compra' : 'Total'}
      </h3>

      <div className="flex flex-col gap-4 mt-4">
        {isSummaryPage && <AddressSummary />}
        <CheckoutSummary isSummaryPage={isSummaryPage} />
      </div>

      <div className="flex flex-col mt-4">
        <MinimalButton text="Pagar" onClick={() => console.log('pay')} />
      </div>
    </div>
  )
}
