import { NavLink } from "react-router-dom";
import "../../Styling/footer_section.css";
const Footersection = () => {
  return (
    <>
      <footer className="container-fluid text-center text-md-start mt-5">
        <hr className="w-100" />
        <div className="row mt-5">
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Explore
            </h6>
            <p>
              <NavLink
                to={"/"}
                className=" text-decoration-none text-muted"
              >
                Home
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/about"}
                className=" text-decoration-none text-muted"
              >
                About us
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/products"}
                className=" text-decoration-none text-muted"
              >
                Products
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/contactus"}
                className=" text-decoration-none text-muted"
              >
                Contact us
              </NavLink>
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Packages
            </h6>
            <p>
              <a
                href="#!"
                className=" text-decoration-none text-muted"
              >
                Autmn Packages{" "}
              </a>
            </p>
            <p>
              <a
                href="#!"
                className=" text-decoration-none text-muted"
              >
                Spring Packages{" "}
              </a>
            </p>
            <p>
              <a
                href="#!"
                className=" text-decoration-none text-muted"
              >
                Winter Packages
              </a>
            </p>
            <p>
              <a
                href="#!"
                className="text-decoration-none text-muted "
              >
                {" "}
                Summer Packages
              </a>
            </p>
          </div>{" "}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Langs{" "}
            </h6>
            <p>
              <a
                href="#!"
                className=" text-decoration-none text-muted"
              ></a>
            </p>
            <p>
              <a
                href="#!"
                className=" text-decoration-none text-muted"
              >
                Arabic
              </a>
            </p>
            <p>
              <a
                href="#!"
                className=" text-decoration-none text-muted"
              >
                English
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footersection;
