import { Button, Col, Image, Menu, Row } from "antd";
import FilterBy from "./components/FitlerBy";
import SortBy from "./components/SortBy";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import InfoCard from "./components/InfoCard";

function App() {
  const nav = ["Overview", "Jobs", "Internships", "Resume Maker"];
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#00203F",
        }}
      >
        <div>
          <Image src="http://test.getwork.org/png/newFlow/white-logo.svg" />
        </div>
        <Menu
          style={{
            width: "500px",
            backgroundColor: "#00203F",
            color: "#ffffff",
          }}
          mode="horizontal"
          items={nav?.map((item, index) => {
            console.log(item);
            return {
              key: index + 1,
              label: item,
            };
          })}
        />
        <Button
          style={{
            width: "120px",
            padding: "0px 10px",
            color: "00203F",
          }}
          size="large"
        >
          Login/Signup
        </Button>
      </Header>
      <Row gutter={16} style={{ backgroundColor: "#e6e6e6" }}>
        <Col span={6}>
          <Sider>
            <FilterBy />
          </Sider>
        </Col>
        <Col span={11}>
          <Sider>
            <SortBy />
          </Sider>
        </Col>
        <Col span={6}>
          <InfoCard />
        </Col>
      </Row>
    </>
  );
}

export default App;
