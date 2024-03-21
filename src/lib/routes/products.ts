export const getProducts = async ({
  category,
  limit,
  page,
}: {
  category: number;
  limit?: number;
  page?: number;
}) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products?category=${category}&&page=${page}&&limit=${limit}`,
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
