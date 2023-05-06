import React from "react";
import { Link } from "react-router-dom";
import "./product_page.css";
import { RepoGetAllProducts } from "../../repositories/product.repo";
import StarRatings from "react-star-ratings";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  const { data, isLoading } = RepoGetAllProducts();
  const [location, setLocation] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const handleSearch = (value) => {
    const searchedProducts = data.filter((product) => {
      if (product.title.toLowerCase().includes(value)) {
        return product;
      }
    });

    setProducts(searchedProducts);
  };

  return (
    <div className="container mt-5">
      <div className="flex-w flex-sb-m p-b-52">
        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            onClick={() => setLocation(null)}
            style={{
              color: location == null ? "#6c7ae0" : "#888",
              textDecoration: location == null ? "underline" : "none",
            }}
          >
            All
          </button>
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            onClick={() => setLocation("Cairo")}
            style={{
              color: location == "Cairo" ? "#6c7ae0" : "#888",
              textDecoration: location == "Cairo" ? "underline" : "none",
            }}
          >
            Cairo
          </button>
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            onClick={() => setLocation("Giza")}
            style={{
              color: location == "Giza" ? "#6c7ae0" : "#888",
              textDecoration: location == "Giza" ? "underline" : "none",
            }}
          >
            Giza
          </button>
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            onClick={() => setLocation("Alex")}
            style={{
              color: location == "Alex" ? "#6c7ae0" : "#888",
              textDecoration: location == "Alex" ? "underline" : "none",
            }}
          >
            Alex
          </button>
        </div>
        <div className=" m-tb-10 d-flex col-12 col-md-4 ">
          <input
            type="text"
            className="border w-100 product_page_input_search rounded"
            placeholder="Search"
            onChange={(data) => handleSearch(data.target.value)}
          />
        </div>
      </div>
      <div className="row isotope-grid">
        {products?.map((product) => {
          if (location == null || product.location == location)
            return (
              <div
                key={product["_id"]}
                className="col-sm-6 col-md-4 col-lg-3 p-b-35"
              >
                <div className="block2">
                  <div className="block2-pic hov-img0 rounded border">
                    <img
                      src={product.thumbImage}
                      alt="IMG-PRODUCT"
                      height={300}
                    />
                    <Link
                      to={`/productdetails/${product["_id"]}`}
                      className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                    >
                      More Details
                    </Link>
                  </div>
                  <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                      <p
                        href="product-detail.html"
                        className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6 col-12 text-truncate"
                      >
                        {product.title}
                      </p>
                      <StarRatings
                        rating={
                          product.rates != null
                            ? product.rates.totalRates /
                              product.rates.numberOfRates
                            : 0
                        }
                        starDimension="20px"
                        starRatedColor="#faaf00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Products;
