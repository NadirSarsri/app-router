import { Link, Outlet } from "react-router-dom";
const products = [
  { id: 1, name: "Watch" },
  { id: 2, name: "Tablet" },
  { id: 3, name: "PC" },
];

export default function Products() {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
