'use client';
import Category from '@/components/Category/Category';
import ClientSideProduct from '@/components/ProductList/ClientSideProduct';
import ProductList from '@/components/ProductList/ProductList';
import Products from '@/components/ProductList/ProductList';
import Slider from '@/components/Slider/Slider';

import { useState } from 'react';

export default function Home() {
  const [category, setCategory] = useState('');
  const updateCategory = (category: string): void => {
    setCategory(category);
  };

  return (
    <main>
      <section className="bg-[#F5F5F7] pt-1.5 ">
        <Category updateCategory={updateCategory} />
      </section>
      <section className="bg-[#F5F5F7] pt-2">
        <Slider />
      </section>
      <section className="bg-[#F5F5F7] pt-12">
        <ClientSideProduct>
          <ProductList />
        </ClientSideProduct>
      </section>
    </main>
  );
}
