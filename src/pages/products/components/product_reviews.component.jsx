import React from 'react';
import avatar from '../../../imported/images/logo-full.png'
import { Rating } from '@mui/material';

const ProductReviewsComponent = () => {
    return (
        <div class="row">
            <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                <div className='row mb-5 '>
                    <h4 className='col-6 text-black-50 py-3'>Reviews</h4>
                    <Rating
                        name="simple-controlled"
                        className='col-6'
                        value={3}
                        onChange={(event, newValue) => {
                            // setValue(newValue);
                        }}
                    />
                </div>
                <div class="p-b-30 m-lr-15-sm">
                    <div class="flex-w flex-t p-b-68">
                        <div class="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                            <img src={avatar} alt="AVATAR" />
                        </div>

                        <div class="size-207">
                            <div class="flex-w flex-sb-m p-b-17">
                                <span class="mtext-107 cl2 p-r-20">
                                    Ariana Grande
                                </span>
                            </div>

                            <p class="stext-102 cl6">
                                Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                            </p>
                        </div>
                    </div>

                    <hr />

                    <form class="w-full">
                        <div class="flex-w flex-m p-t-50 p-b-23">
                            <span class="stext-102 cl3 m-r-16">
                                Your Rating
                            </span>

                            <span class="wrap-rating fs-18 cl11 pointer">
                                <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                <input class="dis-none" type="number" name="rating" />
                            </span>
                        </div>

                        <div class="row p-b-25">
                            <div class="col-12 p-b-5">
                                <label class="stext-102 cl3" for="review">Your review</label>
                                <textarea class="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review"></textarea>
                            </div>
                        </div>

                        <button class="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductReviewsComponent;
