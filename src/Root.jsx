import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import NavBar from "./components/headers/NavBar";
import Footer from "./Footer";

export default function Root() {
  return (
    <div className="bg-[#f7f7f7]">
      {
        <Helmet>
          <title>Gadget : Gadget Heaven </title>
        </Helmet>
      }
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
