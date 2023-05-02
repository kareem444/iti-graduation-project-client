import React from "react";
import Footersection from "../../components/footer_component/footer_component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faChair,
  faNewspaper,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";
import CelebrationIcon from "@mui/icons-material/Celebration";
import "../../Styling/home_page.css";
const HomePage = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row bgSecondary d-flex mt-2">
          <div className="col-12 text-center text-md-start order-2 py-md-0 order-md-1 col-md-6 h-20 bgSecondary d-flex flex-column justify-content-center px-5 mt-5">
            <h1 className="  RobotoFont ">
              Your love story deserves a special wedding,
              and we're here to deliver
            </h1>
            <p className=" my-3 RobotoFont col-11 textColor">
              We believe every couple deserves a unique and
              unforgettable wedding, and we're here to make
              that happen.
            </p>
            <p className=" mb-0 mt-md-5">
              <a
                href="#"
                className="text-dark fw-bold bgPrimary px-3 btn py-2 rounded text-white "
              >
                EXPLORE PLAN
              </a>
            </p>
          </div>
          <div className="col-md-6 h-20 p-0 order-1 order-md-2 col-12 d-flex justify-content-center ">
            <img
              src="assets/img.jpg"
              className="w-70 h-50"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row  pt-5 ">
        <div className="container ">
          <div className="row my-3">
            <h2 className="text-center titleSize kalamFont  pb-4">
              Our Services
            </h2>
            <div className="col-md-4 px-1 text-center ">
              <i className="bi bi-geo-alt-fill"></i>
              <h2 className="kalamFont mt-3">Location</h2>
              <p className="kalamFont">
                This is a short description elaborating the
                service you have mentioned above.
              </p>
            </div>
            <div className="col-md-4 px-1 text-center">
              <FontAwesomeIcon icon={faCamera} />
              <h2 className="kalamFont mt-3">
                Photographer
              </h2>
              <p className="kalamFont">
                This is a short description elaborating the
                service you have mentioned above.
              </p>
            </div>
            <div className="col-md-4 px-1 text-center">
              <FontAwesomeIcon icon={faChair} />
              <h2 className="kalamFont mt-3">
                Hall Chairs
              </h2>
              <p className="kalamFont">
                This is a short description elaborating the
                service you have mentioned above.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 px-1 text-center">
              <FontAwesomeIcon icon={faNewspaper} />
              <h2 className="kalamFont mt-3">
                Documentation
              </h2>
              <p className="kalamFont">
                This is a short description elaborating the
                service you have mentioned above.
              </p>
            </div>
            <div className="col-md-4 px-1 text-center">
              <CelebrationIcon />
              <h2 className="kalamFont mt-3">
                Celebration
              </h2>
              <p className="kalamFont">
                This is a short description elaborating the
                service you have mentioned above.
              </p>
            </div>
            <div className="col-md-4 px-1 text-center">
              <FontAwesomeIcon icon={faChampagneGlasses} />
              <h2 className="kalamFont mt-3">
                Food & Drinks
              </h2>
              <p className="kalamFont">
                This is a short description elaborating the
                service you have mentioned above.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footersection></Footersection>
    </>
  );
};

export default HomePage;
