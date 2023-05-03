import { CloseOutlined } from '@ant-design/icons';
import PropType from 'prop-types';
import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import ImageLoader from '../common/ImageLoader';
import BasketItemControl from './BasketItemControl';
// import { removeFromBasket } from 'redux/actions/basketActions';

const BasketItem = ({ product }) => {
  // const dispatch = useDispatch();
  // const onRemoveFromBasket = () => dispatch(removeFromBasket(product.id));

  return (
    <div className="basket-item">
      {/* <BasketItemControl product={product} /> */}
      <div className="basket-item-wrapper">
        <div className="basket-item-img-wrapper">
          <ImageLoader
            alt={product.name}
            className="basket-item-img"
            src={product.image}
          />
        </div>
        <div className="basket-item-details">
          <Link to={`/product/${product.id}`} onClick={() => document.body.classList.remove('is-basket-open')}>
            <h4 className=" basket-item-name">
              {product.name}
            </h4>
          </Link>
          {/* <div className="basket-item-specs">
            <div>
              <span className="spec-title">Quantity</span>
              <h5 className="my-0">{product.quantity}</h5>
            </div>
          </div> */}
        </div>
        <div className='quantity-control'>
              <BasketItemControl product={product} />
               <button
          // className="basket-item-remove  button-border button-border-gray button-small"
          className='basket-item-remove'
          // onClick={onRemoveFromBasket}
          type="button"
        >
          {/* <CloseOutlined /> */}
          <i class="bi bi-trash3"></i> 
        <span>remove</span>  
        </button>
</div>
        <div className="basket-item-price">
          {/* <h4 className="my-0">{displayMoney(product.price * product.quantity)}</h4> */}
                    <h4 className="my-0">$ 200</h4>

        </div>
       
      </div>
    </div>
  );
};

BasketItem.propTypes = {
  product: PropType.shape({
    id: PropType.string,
    name: PropType.string,
    brand: PropType.string,
    price: PropType.number,
    quantity: PropType.number,
    maxQuantity: PropType.number,
    description: PropType.string,
    keywords: PropType.arrayOf(PropType.string),
    selectedSize: PropType.string,
    selectedColor: PropType.string,
    imageCollection: PropType.arrayOf(PropType.string),
    sizes: PropType.arrayOf(PropType.number),
    image: PropType.string,
    imageUrl: PropType.string,
    isFeatured: PropType.bool,
    isRecommended: PropType.bool,
    availableColors: PropType.arrayOf(PropType.string)
  }).isRequired
};

export default BasketItem;
