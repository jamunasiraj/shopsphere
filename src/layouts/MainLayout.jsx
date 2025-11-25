import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FaviconSetter from "../components/FaviconSetter";

const MainLayout = () => {
  return (
    <>
      <FaviconSetter />
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
