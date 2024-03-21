import { getProducts } from '@/lib/routes/products';
import Image from 'next/image';
import React from 'react';

export interface PageProps {
  _id: string;
  title: string;
  image: string;
  category: number;
}

export default async function Products() {
  const products = await getProducts({ category: 1, limit: 4, page: 1 });
  return (
    <ul>
      {products?.map((p: PageProps) => (
        <li key={p._id}>
          <h2>{p.title}</h2>
          <Image width={40} height={40} src={p.image} alt="product" />
        </li>
      ))}
    </ul>
  );
}
