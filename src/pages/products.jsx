import { Link, Outlet, useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "PC" },
  { id: 2, name: "Graphic Adapter" },
  { id: 3, name: "Screen" },
  { id: 4, name: "Tablet" },
];
export default function Products() {
  const navigate = useNavigate();

  return (
    <ul className="list-group">
      {/* <Outlet /> */}
      {products.map((product) => (
        <li
          onClick={() => navigate(`${product.id}`)}
          className="list-group-item"
          key={product.id}
        >
          {product.name}
        </li>
      ))}
    </ul>
  );
}
