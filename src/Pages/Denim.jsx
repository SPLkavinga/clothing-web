import React from "react";
import Header from './../Components/Header';
import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';
import Sidepanel from "../Components/SidePanel";
import ProductCard from "../Components/ProductCard";
import productImage1 from "../Assets/de1.webp";
import productImage2 from "../Assets/de11.jpg";
import productImage3 from "../Assets/de2.webp";
import productImage4 from "../Assets/de22.jpg";
import productImage5 from "../Assets/de3.webp";
import productImage6 from "../Assets/de33.webp";
import productImage7 from "../Assets/de4.webp";
import productImage8 from "../Assets/de44.jpg";
import productImage9 from "../Assets/de5.webp";
import productImage10 from "../Assets/de55.jpg";
import productImage11 from "../Assets/de6.jpg";
import productImage12 from "../Assets/de66.jpg";
import productImage13 from "../Assets/de7.jpg";
import productImage14 from "../Assets/de77.jpg";
import productImage15 from "../Assets/de8.webp";
import productImage16 from "../Assets/de88.jpg";
import productImage17 from "../Assets/kelly25.webp";
// ... other imports for product images
import Recently from './../Components/Recently';

const products = [
  {
    id: 1,
    image: productImage1,        // Default image
    hoverImage: productImage2,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage1, colorName: "Red" },
      { colorImage: productImage2, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 2,
    image: productImage3,        // Default image
    hoverImage: productImage4,    // Image on hover
    brand: "SKELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage3, colorName: "Red" },
      { colorImage: productImage4, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 3,
    image: productImage5,        // Default image
    hoverImage: productImage6,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage5, colorName: "Red" },
      { colorImage: productImage6, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 4,
    image: productImage7,        // Default image
    hoverImage: productImage8,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage7, colorName: "Red" },
      { colorImage: productImage8, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 5,
    image: productImage9,        // Default image
    hoverImage: productImage10,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage9, colorName: "Red" },
      { colorImage: productImage10, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 6,
    image: productImage11,        // Default image
    hoverImage: productImage12,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage11, colorName: "Red" },
      { colorImage: productImage12, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 7,
    image: productImage13,        // Default image
    hoverImage: productImage14,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage13, colorName: "Red" },
      { colorImage: productImage14, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 8,
    image: productImage15,        // Default image
    hoverImage: productImage16,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage15, colorName: "Red" },
      { colorImage: productImage16, colorName: "Blue" },
    ],
    isNew: true,
  },
  

];

const WorkWear = () => {
  return (
    <section className="min-h-screen bg-gray-100">
      <Header />
      <NavBar />
      <div className="flex flex-col p-6 lg:flex-row">
        {/* Sidebar */}
        <div className="w-full mb-6 lg:w-1/4 lg:pr-6 lg:mb-0">
          <Sidepanel />
        </div>

        <div className="flex-grow">
          <div className="w-full mt-10 overflow-hidden lg:w-3/4 group">
                <img src={productImage17} alt="" className="transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
          </div>
          <p className="mt-10 text-2xl font-bold">Denim</p>
          <hr className="block my-4 mb-10 border-gray-600 md:mb-0 " />
          <br />
          <br />

          {/* Product Grid */}
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}            
                hoverImage={product.hoverImage}   
                brand={product.brand}
                description={product.description}
                price={product.price}
                colors={product.colors}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </div>
      <Recently/>
      <Footer />
    </section>
  );
};

export default WorkWear;
