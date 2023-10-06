import { Button, Col, Image, Menu, Row } from "antd";
import FilterBy from "./components/FitlerBy";
import SortBy from "./components/SortBy";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import InfoCard from "./components/InfoCard";
import "./App.css";
function App() {
  const nav = ["Overview", "Jobs", "Internships", "Resume Maker"];
  return (
    <>
      <Header className="header">
        <div>
          <Image src="http://test.getwork.org/png/newFlow/white-logo.svg" />
        </div>
        <Menu
          className="menu"
          mode="horizontal"
          items={nav?.map((item, index) => {
            return {
              key: index + 1,
              label: item,
            };
          })}
        />
        <Button className="button" size="large">
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
