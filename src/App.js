import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./prodouct";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="header">
        <div id="hedaer-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="" />
          </Link>
          <Button
            size="large"
            onClick={() => {
              navigate("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route exact={true} path={"/"} element={<MainPageComponent />} />
          <Route exact={true} path="/products/:id" element={<ProductPage />} />
          <Route exact={true} path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
