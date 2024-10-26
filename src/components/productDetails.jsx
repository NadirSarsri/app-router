import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(params); //params est un objet
  return (
    <div>
      <h2>Product #{id} Details</h2>
      <p className="lead">After modification press the save button</p>
      <button
        onClick={() => navigate("/products", { replace: true })}
        className="btn btn-primary"
      >
        Save
      </button>
    </div>
  );
};

export default ProductDetails;
