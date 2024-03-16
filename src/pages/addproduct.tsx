import React, { useState } from 'react';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    title: '',
    slug: '',
    desc: '',
    img: '',
    category: '',
    size: '',
    color: '',
    price: '',
    availableQty: '',
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Client-side validation
    if (
      !productData.title ||
      !productData.slug ||
      !productData.desc ||
      !productData.img ||
      !productData.category ||
      !productData.size ||
      !productData.color ||
      !productData.price ||
      !productData.availableQty
    ) {
      setError(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/addproducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        setSuccess(true);
        setError(false);
        // Clear form fields after successful submission
        setProductData({
          title: '',
          slug: '',
          desc: '',
          img: '',
          category: '',
          size: '',
          color: '',
          price: '',
          availableQty: '',
        });
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="product mx-96">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Product Name"
            className="inputBox"
            name="title"
            value={productData.title}
            onChange={handleChange}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Product Slug"
            className="inputBox"
            name="slug"
            value={productData.slug}
            onChange={handleChange}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Product Description"
            className="inputBox"
            name="desc"
            value={productData.desc}
            onChange={handleChange}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Product Image"
            className="inputBox"
            name="img"
            value={productData.img}
            onChange={handleChange}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Product Category"
            className="inputBox"
            name="category"
            value={productData.category}
            onChange={handleChange}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Product Size"
            className="inputBox"
            name="size"
            value={productData.size}
            onChange={handleChange}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Product Color"
            className="inputBox"
            name="color"
            value={productData.color}
            onChange={handleChange}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Product Price"
            className="inputBox"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Product AvailableQty"
            className="inputBox"
            name="availableQty"
            value={productData.availableQty}
            onChange={handleChange}
          />
        </div>
        {/* Add other input fields similarly */}
        {/* Display error message if form submission failed */}
        {error && <span className="error-message">Failed to add product. Please try again.</span>}
        {/* Display success message if product added successfully */}
        {success && <span className="success-message">Product added successfully!</span>}
        <button type="submit" className="appButton" onClick={()=>console.log(productData)}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;






























// import React from "react";
// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// const AddProduct = () => {
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [desc, setDesc] = useState("");
//   const [imageA, setimageA] = useState("");
//   const [category, setCategory] = useState("");
//   const [size, setSize] = useState("");
//   const [color, setColor] = useState("");
//   const [price, setPrice] = useState("");
//   const [availableQty, setavailableQty] = useState("");

//   const [error, setError] = React.useState(false);
//   // const nav = useNavigate();

//   const addProduct = async () => {
//     if (
//       !title ||
//       !slug ||
//       !desc ||
//       !imageA ||
//       !category ||
//       !size ||
//       !color ||
//       !price ||
//       !availableQty
//     ) {
//       setError(true);
//       return false;
//     }
//     const product = JSON.parse(localStorage.getItem("Product")!);
//     var productId;
//     if (product) {
//       productId = product.slug;
//       console.warn(productId);
//     } else {
//       console.error("Product not found in local storage.");
//     }
//     let result = await fetch("http://localhost:3001/api/addproducts", {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         slug,
//         desc,
//         imageA,
//         category,
//         size,
//         color,
//         price,
//         availableQty,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     if (result) {
//       // nav('/tshirts')
//     }
//     console.warn(result);
//   };
//   return (
//     <div className="product mx-96">
//       <h1>AddProduct</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Product Name"
//           className="inputBox"
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//           value={title}
//         />
//       </div>
//       {error && !title && (
//         <span className="invalid-input">Enter valid title</span>
//       )}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Product slug"
//           className="inputBox"
//           onChange={(e) => {
//             setSlug(e.target.value);
//           }}
//           value={slug}
//         />
//       </div>
//       {error && !slug && (
//         <span className="invalid-input">Enter valid slug</span>
//       )}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Prduct desc"
//           className="inputBox"
//           onChange={(e) => {
//             setDesc(e.target.value);
//           }}
//           value={desc}
//         />
//         {error && !price && (
//           <span className="invalid-input">Enter valid desc</span>
//         )}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Product Image"
//           className="inputBox"
//           onChange={(e) => {
//             setimageA(e.target.value);
//           }}
//           value={imageA}
//         />
//         {error && !category && (
//           <span className="invalid-input">Enter valid IMAGE</span>
//         )}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Prduct category"
//           className="inputBox"
//           onChange={(e) => {
//             setCategory(e.target.value);
//           }}
//           value={category}
//         />
//         {error && !category && (
//           <span className="invalid-input">Enter valid category</span>
//         )}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Prduct size"
//           className="inputBox"
//           onChange={(e) => {
//             setSize(e.target.value);
//           }}
//           value={size}
//         />
//         {error && !price && (
//           <span className="invalid-input">Enter valid size</span>
//         )}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Prduct Color"
//           className="inputBox"
//           onChange={(e) => {
//             setColor(e.target.value);
//           }}
//           value={color}
//         />
//         {error && !price && (
//           <span className="invalid-input">Enter valid color</span>
//         )}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Prduct Price"
//           className="inputBox"
//           onChange={(e) => {
//             setPrice(e.target.value);
//           }}
//           value={price}
//         />
//         {error && !price && (
//           <span className="invalid-input">Enter valid price</span>
//         )}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Product Available Quantity"
//           className="inputBox"
//           onChange={(e) => {
//             setavailableQty(e.target.value);
//           }}
//           value={availableQty}
//         />
//         {error && !availableQty && (
//           <span className="invalid-input">Enter valid availableQty</span>
//         )}
//       </div>
//       <button type="button" className="appButton" onClick={addProduct}>
//         Add Product{" "}
//       </button>
//     </div>
//   );
// };

// export default AddProduct;
