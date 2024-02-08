import "./App.css";
import { Layout, Typography, Space } from "antd";
import MainLayout from "./components/MainLayout";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <MainLayout />
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © {year}
            <Link to="/"> CryptTracker Inc.</Link> <br />
            All Rights Reserved.{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: "300",
                color: "lightgrey",
              }}
            >
              shajjadshagor@gmail.com
            </span>
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
