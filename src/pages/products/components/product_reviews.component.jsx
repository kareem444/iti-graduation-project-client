import React, { useEffect, useState } from "react";
import userImage from "../../../imported/images/user.png";
import StarRatings from "react-star-ratings";
import { RepoCreateRate } from "../../../repositories/rate.repo";
import { RepoCreateComment } from "../../../repositories/comment.repo";
import useAuth from "../../../custom_hooks/use_auth";
import { RepoGetMyOrders } from "../../../repositories/order.repo";

const ProductReviewsComponent = ({ product }) => {
    const [enteredComment, setEnteredComment] = useState("");

    const { mutate: createRate } = RepoCreateRate();
    const { mutate: createComment } = RepoCreateComment();

    const [myRate, setMyRate] = useState(null);

    const { authData } = useAuth();

    const { data: myOrders } = RepoGetMyOrders();

    const [checkIfOrdered, setCheckIfOrdered] = useState(false);

    useEffect(() => {
        if (myOrders != null && product) {
            let checkIfOrdered = myOrders.find(
                (order) => order.product.id === product["_id"]
            );
            setCheckIfOrdered(checkIfOrdered != null);
        }
    }, [myOrders, checkIfOrdered, product]);

    useEffect(() => {
        if (product?.rates != null && myRate == null && authData != null) {
            let myRate = product.rates.users.find((user) => user.id === authData?.id);
            setMyRate(myRate);
        }
    }, [product, authData]);

    return (
        <div className="bor10 m-t-50 p-t-43 p-b-40">
            {/* Tab01 */}
            <div className="tab01">
                {/* Nav tabs */}
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item p-b-10">
                        <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#reviews"
                            role="tab"
                        >
                            Reviews {product?.comments.length}
                        </a>
                    </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content p-t-43">
                    <div
                        className="tab-pane fade show active"
                        id="reviews"
                        role="tabpanel"
                    >
                        <div className="row">
                            <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                <div className="p-b-30 m-lr-15-sm">
                                    {/* Review */}
                                    {product?.comments.map((comment) => {
                                        return (
                                            <div className="d-flex p-b-68">
                                                <div className="flex-w flex-t">
                                                    <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                                        <img
                                                            src={comment.user.avatar ?? userImage}
                                                            alt="AVATAR"
                                                        />
                                                    </div>
                                                    <div className="size-207">
                                                        <div className="flex-w flex-sb-m p-b-17">
                                                            <span className="mtext-107 cl2 p-r-20">
                                                                {comment.user.name}
                                                            </span>
                                                        </div>
                                                        <p className="stext-102 cl6">{comment.comment}</p>
                                                    </div>
                                                </div>
                                                {/* <img
                                                    src="https://img.icons8.com/ios-glyphs/30/null/delete-sign.png"
                                                    height={20}
                                                    style={{ cursor: "pointer", marginLeft: "auto", marginRight: "20px" }}
                                                /> */}
                                            </div>
                                        );
                                    })}
                                    <hr />
                                    {/* Add review */}
                                    {checkIfOrdered == true ? (
                                        <form className="w-full">
                                            <div className="flex-w flex-m p-t-50 p-b-23">
                                                <span className="stext-102 cl3 m-r-16">
                                                    Your Rating
                                                </span>
                                                <StarRatings
                                                    rating={myRate?.rate ?? 0}
                                                    starDimension="20px"
                                                    starSpacing=""
                                                    changeRating={(val) => {
                                                        createRate({ id: product["_id"], rate: val });
                                                        setMyRate({ ...myRate, rate: val });
                                                    }}
                                                    starRatedColor="#faaf00"
                                                />
                                            </div>
                                            <form className="row p-b-25">
                                                <div className="col-12 p-b-5">
                                                    <label className="stext-102 cl3" htmlFor="review">
                                                        Your review
                                                    </label>
                                                    <textarea
                                                        className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10"
                                                        id="review"
                                                        onChange={(e) => setEnteredComment(e.target.value)}
                                                        value={enteredComment}
                                                    />
                                                </div>
                                                <button
                                                    className="flex-c-m mt-5 stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10 m-auto col-6"
                                                    disabled={enteredComment?.trim().length < 1}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        createComment({
                                                            id: product["_id"],
                                                            comment: enteredComment,
                                                            productId : product["_id"]
                                                        });
                                                        setEnteredComment("");
                                                    }}
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </form>
                                    ) : (
                                        <div>
                                            <h5 className="text-center fs-3 mt-5" style={{ color: "#888" }}>
                                                You must order this product to be able to review it
                                            </h5>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewsComponent;
