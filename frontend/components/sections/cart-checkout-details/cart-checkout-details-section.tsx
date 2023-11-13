import { CartCheckoutSection } from './cart-checkout'
import { CartDetailsSection } from './cart-details'

export const CartCheckoutDetailsSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="sm:col-span-2">
        < CartDetailsSection />
      </div>
      <div className="sm:col-span-1">
        < CartCheckoutSection />
      </div>
    </section>
  )
}
