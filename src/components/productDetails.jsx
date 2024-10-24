import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();

  return <h2>Details du produit #{params.id}</h2>;
}
