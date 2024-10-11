import React from "react";
import Header from './../Components/Header';
import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';
import Sidepanel from "../Components/SidePanel";
import ProductCard from "../Components/ProductCard";
import productImage1 from "../Assets/wo1.webp";
import productImage2 from "../Assets/wo2.webp";
import productImage3 from "../Assets/wo3.webp";
import productImage4 from "../Assets/wo4.webp";
import productImage5 from "../Assets/wo11.webp";
import productImage6 from "../Assets/wo22.webp";
import productImage7 from "../Assets/wo33.webp";
import productImage8 from "../Assets/wo44.jpg";
import productImage9 from "../Assets/work5.jpg";
import productImage10 from "../Assets/work55.webp";
import productImage11 from "../Assets/wo6.webp";
import productImage12 from "../Assets/wo66.webp";
import productImage13 from "../Assets/wo7.webp";
import productImage14 from "../Assets/wo77.webp";
import productImage15 from "../Assets/wo8.webp";
import productImage16 from "../Assets/wo88.webp";
// ... other imports for product images
import Recently from './../Components/Recently';

const products = [
  {
    id: 1,
    image: productImage1,        // Default image
    hoverImage: productImage5,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage1, colorName: "Red" },
      { colorImage: productImage5, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 2,
    image: productImage2,        // Default image
    hoverImage: productImage6,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage2, colorName: "Red" },
      { colorImage: productImage6, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 3,
    image: productImage3,        // Default image
    hoverImage: productImage7,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage3, colorName: "Red" },
      { colorImage: productImage7, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 4,
    image: productImage4,        // Default image
    hoverImage: productImage8,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage4, colorName: "Red" },
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
          <p className="mt-10 text-2xl font-bold">Workwear</p>
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
