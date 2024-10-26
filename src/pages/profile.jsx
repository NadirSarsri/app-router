import { useAuth } from "../utils/auth";

const Profile = () => {
  const auth = useAuth();

  return (
    <>
      <h2>Profile</h2>
      <p className="lead">Welcome {auth.user} </p>
    </>
  );
};

export default Profile;
