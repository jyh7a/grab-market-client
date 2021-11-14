import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const URL = "https://0a00b60f-3594-4963-8461-b21694d1f1be.mock.pstmn.io";

  useEffect(() => {
    axios
      .get(`${URL}/products/${id}`)
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.error("error:", error);
      });
  }, []);

  if (product == null) {
    return <h2>상품 준비중입니다.</h2>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={`/${product.imageUrl}`} alt={product.name} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt="avatar" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2020년 12월 7일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
