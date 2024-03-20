'use client';
import Category from '@/components/Category/Category';
import ClientSideProduct from '@/components/Products/ClientSideProduct';
import Products from '@/components/Products/Products';
import Slider from '@/components/Slider/Slider';

import { useState } from 'react';

export default function Home() {
  const [category, setCategory] = useState('');
  const updateCategory = (category: string): void => {
    setCategory(category);
  };

  return (
    <main>
      <section className="bg-[#F5F5F7]">
        <Category updateCategory={updateCategory} />
      </section>
      <section className="bg-[#F5F5F7]">
        <Slider />
      </section>
      <section className="bg-[#F5F5F7]">
        <ClientSideProduct>
          <Products />
        </ClientSideProduct>
      </section>
    </main>
  );
}
