export const getNews = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/news`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getOneNews = async (slug: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/news/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
