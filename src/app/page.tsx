'use client';
import Category from '@/components/Category/Category';
import Slider from '@/components/Slider/Slider';

import { useState } from 'react';

export default async function Home() {
  const [category, setCategory] = useState('');
  const updateCategory = (category: string): void => {
    setCategory(category);
  };
  console.log(category);

  return (
    <main>
      <section className="bg-[#F5F5F7]">
        <Category updateCategory={updateCategory} />
      </section>
      <section className="bg-[#F5F5F7]">
        <Slider />
      </section>
    </main>
  );
}
