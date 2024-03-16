import Link from 'next/link'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { IoIosCloseCircle } from 'react-icons/io'
import { IoBagAdd } from 'react-icons/io5'

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }: any) => {
  return (
    <div className='container m-auto'>

      <h1 className='font-bold text-3xl my-8 text-center'>Checkout Page</h1>
      <h2 className='font-bold text-xl mx-5'>1. Delivery Details</h2>
      <div className="mx-8 md:flex">

        <div className="px-2 w-full md:w-1/2">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>


        <div className="px-2 w-full  md:w-1/2">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className="px-2 w-auto mx-8">
        <div className="relative mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea name="address" id="address" cols={30} rows={2} className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mx-7k"></textarea>
        </div>

      </div>

      <div className="md:flex mx-8"><div className="px-2 w-full md:w-1/2">
        <div className="relative mb-4">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone  </label>
          <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div><div className="px-2 w-full md:w-1/2">
          <div className="relative mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">city</label>
            <input type="city" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>


      <div className=" mx-8 md:flex">
        <div className="px-2  w-full md:w-1/2">
          <div className="relative mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="state" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className="px-2  w-full md:w-1/2">
          <div className="relative mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
            <input type="pincode" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <h2 className='font-semibold text-xl mx-5'>2. Review Cart items</h2>
      <div className='m-10'>
        <div className="h-auto w-100%  px-10 my-8  shadow-2xl" >
          <h1 className='font-bold text-xl'>Shopping Cart</h1>



          {/* <span onClick={toggleCart} className="absolute top-5 right-2 font-bold cursor-pointer text-2xl text-cyan-400"><IoIosCloseCircle /></span> */}


          <ol className='list-decimal font-semibold my-3'>
            {Object.keys(cart).length == 0 && <div className='my-4 font-normal' >Your cart is empty. </div>}
            {Object.keys(cart).map((k) => {
              return (<>
                <li key={k}>
                  <div className="item flex">
                    <div className='w-full md:w-1/3 font-semibold'>{cart[k].name}</div>
                    <div className='flex items-center justify-center font-semibold '><FaMinus className='mx-2' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} />
                      {cart[k].qty}
                      <FaPlus className='mx-2' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} />

                    </div>
                  </div>
                </li>
              </>)
            })}
          </ol>
          <span className="total font-bold">Subtotal : {subTotal}</span>
</div>
          
          <Link href={'/checkout'}>
            <button className=' flex text-white bg-cyan-500 px-8 py-2 my-3 border-0 rounded w-auto'><IoBagAdd className='m-1' />
              Pay ₹{subTotal}</button>
          </Link>
        

      </div>
    </div>


  )
}

export default Checkout