import { Link, Outlet } from "react-router-dom";
const products = [
  { id: 1, name: "PC" },
  { id: 2, name: "Graphic Adapter" },
  { id: 3, name: "Screen" },
  { id: 4, name: "Tablet" },
];
export default function Products() {
  return (
    <ul className="list-group">
      {/* <Outlet /> */}
      {products.map((product) => (
        <li className="list-group-item" key={product.id}>
          <Link to={`${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
