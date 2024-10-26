import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(params); //params est un objet
  return (
    <div>
      <h2>Product #{id} Details</h2>
    </div>
  );
};

export default ProductDetails;
