import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import { logout } from "../redux/slices/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);
  return <Layout />;
};

export default Logout;
