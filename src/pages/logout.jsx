import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };
  return (
    <button onClick={handleLogout} className="btn btn-primary">
      Logout
    </button>
  );
};

export default Logout;
