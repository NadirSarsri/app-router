import { useSearchParams } from "react-router-dom";

const NewestProducts = () => {
  const searchParams = useSearchParams();
  console.log(searchParams);

  return <h2>Newest Products</h2>;
};

export default NewestProducts;
