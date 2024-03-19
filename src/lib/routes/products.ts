export const getProducts = async () => {
  const res = await fetch(`http://localhost:3000/api/products`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};
