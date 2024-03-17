'use client';
import Category from '@/components/Category/Category';
import Slider from '@/components/Slider/Slider';

import { useState } from 'react';

export default function Home() {
  const [category, setCategory] = useState('');
  const updateCategory = (category: string): void => {
    setCategory(category);
  };
  console.log(category);
  return (
    <main>
      <section className="bg-[#F5F5F7]">
        <div className="container pt-4">
          <Category updateCategory={updateCategory} />
        </div>
      </section>
      <section className="bg-[#F5F5F7]">
        <div className="container pt-12">
          <Slider />
        </div>
      </section>
    </main>
  );
}
