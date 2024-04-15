import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid"

const CartCount = () => {
  return (
    <>
    <div>
      <div>
        <div>
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </div>
        <div>
          <h1>Your Cart<span>(Item)</span></h1>
        </div>
      </div>
      <div>
        <button type="button" className=""><XMarkIcon className="w-5 h-5" /></button>
      </div>
    </div>
    </>
  )
}

export default CartCount