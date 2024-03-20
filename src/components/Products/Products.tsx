import { getProducts } from '@/lib/routes/products';
import Image from 'next/image';
import React from 'react';

interface ProductProps {
  _id: string;
  title: string;
  image: string;
}
const Products = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <ul>
      {products?.map((p: ProductProps) => (
        <li key={p._id}>
          <h2>{p.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default Products;
