export const getProducts = async ({
  category,
  limit,
  page,
  lactose,
  vegan,
  spicy,
}: {
  category: number;
  limit?: number;
  page?: number;
  lactose?: boolean;
  vegan?: boolean;
  spicy?: boolean;
}) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products?category=${category}&&page=${page}&&limit=${limit}&&lactose=${lactose}&&vegan=${vegan}&&spicy=${spicy}`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
