import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = useState([]);
  const URL = "https://0a00b60f-3594-4963-8461-b21694d1f1be.mock.pstmn.io";
  useEffect(() => {
    axios
      .get(`${URL}/products`)
      .then(function (response) {
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.error("error:", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="hedaer-area">
          <img src="./images//icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="./images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map((product, index) => {
            return (
              <div key={index} className="product-card">
                <Link className="product-link" to={`/products/${index}`}>
                  <div>
                    <img
                      className="product-img"
                      src={product.imgeUrl}
                      alt={product.name}
                    />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="./images/icons/avatar.png"
                        alt=""
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
