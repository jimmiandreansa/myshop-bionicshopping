import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { useNavigate } from "react-router-dom";

// * Action
import { getProductDetails } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartAction";

const ProductScreen = ({ match }) => {
  const nav = useNavigate();
    const { id } = useParams()
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        nav("/cart")
    }

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: Rp. {product.price}</p>
              <p>
                Description: {product.description}
              </p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>Rp. {product.price}</span>
              </p>
              <p>
                Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                            {x + 1}
                        </option>
                    ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>Add to cart</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
