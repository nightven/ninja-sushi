'use client';
import Category from '@/components/Category/Category';

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
        <div className="container pt-4">
          <Category updateCategory={updateCategory} />
        </div>
      </section>
    </main>
  );
}
