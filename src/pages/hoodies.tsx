import mongoose from "mongoose";
import React from "react";
import Product from "../../models/Product";
import Link from "next/link";

const Hoodies = ({ products }: any) => {
  console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap justify-center -m-4 ">
            {Object.keys(products).map((item: any) => {
              return (
                <>
                <Link key={products[item]._id} href={`/product/${products[item].slug}`} >
                  <div className="lg:w-60 md:w-60 p-4 m-2 shadow-2xl">
                    <a className="block relative h-48 rounded overflow-hidden ">
                      <img
                        alt="ecommerce"
                        className=" m-auto object-cover object-top w-full h-full block"
                        src={products[item].img}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Hoodie
                      </h3>
                      <h2 className="text-gray-900 title-font object-top text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <div className="mt-1 space-x-2">
                        {" "}
                        {products[item].size.includes("S") && (
                          <span className="border border-gray-500">S</span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border border-gray-500 ">M</span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border border-gray-500 ">L</span>
                        )}
                        {products[item].size.includes("XS") && (
                          <span className="border border-gray-500 ">Xs</span>
                        )}
                        {products[item].size.includes("S") && (
                          <span className="border border-gray-500 ">S</span>
                        )}
                        {products[item].size.includes("XL") && (
                          <span className="border border-gray-500 ">XL</span>
                        )}
                      </div>
                      <p className="mt-1">₹{products[item].price} only</p>
                      <div className="flex w-52">
                      {products[item].color.includes("black") && (
                          <button className="border border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("red") && (
                          <button className="border border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        
                        {products[item].color.includes("green") && (
                          <button className="border border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("blue") && (
                          <button className="border border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("white") && (
                          <button className="border border-gray-800 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("pink") && (
                          <button className="border border-gray-300 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("purple") && (
                          <button className="border border-gray-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("yellow") && (
                          <button className="border border-gray-300 ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        
                      </div>
                    </div>
                  </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect("mongodb://localhost:27017/codeswear1");
  }
  let products = await Product.find({ category: "hoodie" });
  let tshirts: any = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) },
  };
}

export default Hoodies;
