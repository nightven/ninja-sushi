export const getHomePageData = async () => {
  try {
    return { props: { products: products }, revalidate: 120 };
  } catch (error) {
    return { props: { products: {} } };
  }
};
