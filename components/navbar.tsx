import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from 'react-icons/fa';
import { IoBagAdd } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }: any) => {
    // console.log(cart, addToCart, removeFromCart, clearCart, subTotal)

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
        }

    }

    const ref: any = useRef();
    return (
        <nav className='z-50 sticky top-0  bg-cyan-300 shadow-lg'>
            <div className='mx-auto flex flex-wrap md:flex-row justify-center  items-center py-2'>
                <div className="logo">
                    <Link href={'/'}>
                        <Image src="/logo.webp" alt='' width={200} height={40} />
                    </Link>
                </div>
                <div className="nav md:ml-auto  md:mr-28">
                    <ul className='flex item-center justify-end space-x-5 font-bold'>
                        <Link href={'/tshirts'}><li className='nav-link hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white' >Tshirts</li></Link>
                        <Link href={'/hoodies'}><li className='hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-whit'>Hoodies</li></Link>
                        <Link href={'/mugs'}><li className='hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-whit'>Mugs</li></Link>
                        <Link href={'/stickers'}><li className='hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-whit'>Stickers</li></Link>
                        <Link href={'/addproduct'}><li className='hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-whit'>Add Product</li></Link>
                    </ul>
                </div>
                <div  className='cart absolute right-2 top-4 mx-5 '>
                    <button className='flex'>
                        <MdAddShoppingCart onClick={toggleCart} className='text-xl md:text-3xl ' />
                        <Link href={'/login'}><MdAccountCircle className='text-xl md:text-3xl'/></Link>
                    </button>
                </div>
                 <div className={`h-[100vh] sideCart absolute top-0 right-0 bg-cyan-100 px-6 py-8 transition-transform ${Object.keys(cart).length!==0?'translate-x-0':'translate-x-full'} shadow-2xl`} ref={ref}>

                {/* <div className={`h-[100vh] sideCart absolute top-0 right-0 bg-cyan-100 px-6 py-8 transition-transform translate-x-full shadow-2xl`} ref={ref}> */}
                    <h1 className='font-bold text-xl'>Shopping Cart</h1>



                    <span onClick={toggleCart} className="absolute top-5 right-2 font-bold cursor-pointer text-2xl text-cyan-400"><IoIosCloseCircle /></span>
                    <ol className='list-decimal font-semibold my-3'>
                        {Object.keys(cart).length == 0 && <div className='my-4 font-normal' >Your cart is empty. </div>}
                        {Object.keys(cart).map((k) => {
                            return (<>
                                <li key={k}>
                                    <div className="item flex">
                                        <div className='w-2/3 font-semibold'>{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                                        <div className='w-1/3 flex items-center justify-center font-semibold '>
                                            <FaMinus className='mx-2' onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} />
                                            {cart[k].qty}
                                            <FaPlus className='mx-2' onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} />

                                        </div>
                                    </div>
                                </li>
                            </>)
                        })}
                    </ol>
                    <span className="total font-bold">Subtotal : {subTotal}</span>
                    <div className="flex space-x-2">
                        <Link href={'/checkout'}>
                            <button className=' flex text-white bg-cyan-500 px-8 py-2 my-3 border-0 rounded w-auto'><IoBagAdd className='m-1' />
                                Check Out</button>
                        </Link>
                        <button onClick={clearCart} className=' flex text-white bg-cyan-500 px-8 py-2 my-3 border-0 rounded w-auto'>
                            Clear Cart</button>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar