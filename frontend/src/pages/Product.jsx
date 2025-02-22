import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductHd from '../components/ProductHd';
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from "../components/ProductDescription"
import RelatedProducts from "../components/RelatedProducts"
function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-red-500">
        ❌ Product Not Found!
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <ProductHd product={product} />
      <ProductDisplay product={product} />
      <ProductDescription/>
      <RelatedProducts/>
    </div>
  );
}

export default Product;
