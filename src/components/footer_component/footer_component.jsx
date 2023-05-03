import { NavLink } from "react-router-dom";
import "../../Styling/footer_section.css";

const Footersection = () => {
  return (
    <>
      <footer className="container-fluid  mt-5">
        <hr className="w-100" />
        <div className="row mt-5 justify-content-around text-center ">
          <div className=" col-3    mb-4">
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
                className=" text-decoration-none text-muted "
              >
                <p className="ft__headSize">Products</p>
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
          <div className=" col-3   mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Packages Locations
            </h6>
            <p>
              <a
                href="#!"
                className=" text-decoration-none text-muted"
              >
                Cairo {window.innerWidth >= 768 && "City"}
              </a>
            </p>
            <p>
              <a
                href="#!"
                className=" text-decoration-none text-muted"
              >
                Giza {window.innerWidth >= 768 && "City"}
              </a>
            </p>
            <p>
              <a
                href="#!"
                className=" text-decoration-none text-muted"
              >
                Alex {window.innerWidth >= 768 && "City"}
              </a>
            </p>
          </div>{" "}
          <div className=" col-3   mb-4">
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
