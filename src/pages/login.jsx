import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { useRef } from "react";

export default function Login() {
  const userRef = useRef();
  const navigate = useNavigate();
  const auth = useAuth();
  // console.log(auth);

  const handleLogin = () => {
    const username = userRef.current.value;
    if (username) {
      auth.login(username);
      navigate("/profile", { replace: true });
    }
  };
  return (
    <form>
      <label className="form-label">Username</label>
      <input
        ref={userRef}
        className="form-control"
        type="text"
        placeholder="Username"
      />
      <button
        onClick={handleLogin}
        className="btn btn-primary mt-2"
        type="button"
      >
        Login
      </button>
    </form>
  );
}
