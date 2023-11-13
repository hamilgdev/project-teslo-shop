
export const OrdersHistorySection = () => {
  return (
    <section>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Historial de ordenes</h1>

      <div className="relative overflow-x-auto my-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                    ID
              </th>
              <th scope="col" className="px-6 py-3">
                    Nombre del producto
              </th>
              <th scope="col" className="px-6 py-3">
                    Pagado
              </th>
              <th scope="col" className="px-6 py-3">
                    Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
              <td className="px-6 py-4">Apple MacBook Pro 17</td>
              <td className="px-6 py-4">Si</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
              <td className="px-6 py-4">Apple MacBook Pro 17</td>
              <td className="px-6 py-4">No</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}
