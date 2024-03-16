import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import Slug from "./product/[slug]";

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<any>({});
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    try{
      if (localStorage.getItem("Cart")) {
        setCart(JSON.parse(localStorage.getItem('Cart')));
        saveCart(JSON.parse(localStorage.getItem('Cart')));
      }
      else{

      }
    }catch(error){
      console.error(error);
      localStorage.clear();
    }
    
  },[]);

  const saveCart = (myCart: any) => {
    localStorage.setItem("Cart", JSON.stringify(myCart))
    let subt =0;
    let keys = Object.keys(myCart)
    for(let i=0;i<keys.length;i++)
    {
       subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  } 

  // const setCart = () => { }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }

  const addToCart = (itemCode: any, qty: any, price: any, name: any, size: any, variant: any) => {
    let newCart: any = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);

  }

  const removeFromCart = (itemCode: any, qty: any, price: any, name: any, size: any, variant: any) => {
    
    let newCart: any = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);

  }

  return <><Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component slug={[Slug]} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />;
  </>
}
